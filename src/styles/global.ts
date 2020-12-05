import { createGlobalStyle } from 'styled-components';
import espaco from '../assets/espaco.png';
export default createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

 body{

    background: #1f1b19 url(${espaco}) 60% top;
    display: flex;
    align-items: right;
    margin: 0px;
}

body, input, button{
    font: 16px Roboto;
}

#root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;

}

button{
    cursor: pointer;
}

`;