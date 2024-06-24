import styled from "styled-components";

const Identidade = styled.main`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: aqua;
        border-radius: 10px;
    }
    .container{
        display: flex;
        flex-direction: row;
        padding: 25px;
        gap: 15px;
        background-color: white;
    }

    .box{
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .box p{
        font-size: medium;
        text-align: center;
    }

`;

export default Identidade;