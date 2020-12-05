import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, Info } from './styles';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';

interface Parametros{
    nome: string;
}
const Personagens: React.FC = () => {
    const { params } = useRouteMatch<Parametros>();


    useEffect(() => {
        api.get(`/character/?id=${params.nome}`).then(response => {
            console.log(response.data);
        });
    }, [params.nome]);
    //para requisição do personagem pela rota



return(
    <>
    <Header>
        <img src={logoImg} alt='API ROCK E MORTY'/>
        <Link to='/'> Back </Link>
        </Header>
        <Info>
            <header>
                <img src={Object.name} alt='img' />
                <div>
                    <strong> Nome/Nome</strong>
                    <p>Descrição do persona</p>
                </div>
            </header>

        </Info>
    </>
)
};


export default Personagens;