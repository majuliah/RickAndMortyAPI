import React, {useState, FormEvent, useEffect} from 'react';
import { Title, Form, Personas, Error} from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import api from '../../services/api';

interface Objects {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    image_url: string;
}

const Dashboard: React.FC = () => {

    const [persons, setPersons] = useState<Objects[]>([]);
    const [newPersons, setNewPersons] = useState('');
    const [inputError, setInputError] = useState('');

    useEffect(() => {
        const personagens = localStorage.getItem('@RickMorty:personagens');
        if(personagens) {
            setPersons(JSON.parse(personagens));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('@RickMorty:personagens', JSON.stringify(persons));

    }, [persons]);

                    //verificação dde erro   v
    async function addPersons(state: FormEvent<HTMLFormElement>,): Promise<void>{
        state.preventDefault();

        if (!newPersons) {
            setInputError('Digite o nome do Personagem que deseja encontrar :)');
            return;
        }

        try{
        const response = await api.get<Objects>(`character/?name=${newPersons}`);
        console.log(response.data);
        const people = response.data.results[0];
        setPersons([...persons, people]);
        setNewPersons('');
        setInputError('');
        }
        catch(err){
            setInputError('Personagem não encontrado :( ');
        }


        //adicionar um novo personagem
        //consumir a api do git
        //salvar o estado do novo repositório
    }

            //verificação de erro ^

    return (
        <>

        <img src={logo}  alt='The API' />

    <Title>The Rick and Morty API</Title>

    <Form onSubmit={addPersons}>

        <input
        value={newPersons}
        onChange={(state) => setNewPersons(state.target.value)}
        placeholder="Encontrar Personagens" />

        <button type='submit'> Buscar </button>




    </Form>


    {inputError && <Error>{inputError}</Error>}



    <Personas>

{ persons.map(people => (

        <Link key={ people.id } to={`/personagens/?name=${ people.name }`}>

        < img src={ people.image_url }
              alt=' Personagem IMG '  />

        <div>

        <strong> { people.status } </strong>

        <p>
            { people.species }
        </p>

        </div>

        </Link>

))}

</Personas>


        </>
    );
};


export default Dashboard;
