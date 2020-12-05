import styled from 'styled-components';



export const Title = styled.h1`
    font-style: Roboto ;
    font-size: 48px;
    color: #ffff00;


    margin-top: 30px;
    max-width: 700px;

`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;


    input{
        flex: 1;
        color: e6f2ff;
        padding: 0 20px;
        height: 60px;
        border: 20px 20px 20 20px;
    }

    button{
        width: 210px;
        background: #009973;
        border-radius: 5px 5px 20px 5px;
        border: 0;
        color: yellow;
        font-weight: bold;
    }

`;

export const Personas = styled.div`

margin-top: 80px;
max-width: 900px;

a{
    background: #332145;
    border-radius: 60px;
    width: 90%;
    padding: 20px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
        margin-top: 16px;
    }


    img{

        width: 200px;
        height: 200px;
        border-radius:100%;

    }

    div{
        margin: 6px;

        strong{
            font-size: 30px;
            color: yellowgreen;
    }

        p{
            font-size: 18px;
            color: greenyellow;
            margin-top: 4px;

        }
    }


}


`;

export const Error = styled.span`

    display: block;
    color: #ff0000;
    margin-top: 8px;
`;

export const Logo = styled.img`

    width: 20px;
    height: 20px;
    margin-top: 20%;
`;