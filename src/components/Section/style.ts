import styled from "styled-components";

const AboutCompany = styled.main`

    *{
        display: flex;
        text-align:justify;
        justify-content: center;
        padding: 10px 10px;
        align-items: center;
        background-color: #989A91;
        color:black;
    }

    .container{
        display:flex;
        flex-direction: row;
        align-items: center;
    }

    .table-text{
        width: 35%;
        display: flex;
        flex-direction: column;
        margin-top: 5%
    }

    .table-img{
        width: 85%;
        height: 500px;
        display: flex;
    }

`;

export default AboutCompany;