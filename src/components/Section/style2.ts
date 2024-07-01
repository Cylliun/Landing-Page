import styled from "styled-components";

const Identidade = styled.main`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color:#ffff;
        background-color: #c55959;
        font-family: 'Times New Roman', Times, serif;
    }
    .container{
        display: flex;
        padding: 20px;
        gap: 15px;
        background-color:#808080;
        flex-wrap: wrap
    }

    .table.identify{
        flex: 1;
        flex-direction: column;
        border-radius: 10px;
        padding: 1rem;
    }

    .table.identify h1{
        text-align: center;
        margin-bottom: 10px;
    }

    .table.identify p{
        text-align: justify;
    }

`;

export default Identidade;