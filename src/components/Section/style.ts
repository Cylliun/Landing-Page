import styled from "styled-components";

const AboutCompany = styled.main`

    *{
        padding: 10px 10px;
        margin: 0;
        box-sizing: border-box;
        background-color: #808080;
        color:#ffff;
        font-family: 'Times New Roman', Times, serif;
    }

    section{
        display:flex;
        justify-content:space-evenly;
        align-items: center;
    }

    .table.table-text{
        width: 35%;
        flex-direction: column;
        margin-top: 5%
    }

    .table-img{
        width: 200px;
        height: 200px;
        margin-bottom: 5%;
    }

`;

export default AboutCompany;