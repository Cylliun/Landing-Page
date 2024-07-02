import styled from "styled-components";

const Footer = styled.main`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #ffff;
        background-color: #3b3b3b;
        text-decoration: none;
        list-style:none ;
    }

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        padding: 20px 20px;
    }

    .container ul{
        margin-top: 10px;
    }

    .container li{
        
    }

    .container :hover a{
        color: red;
    }

    .final{
        text-align: center;
    }


`;

export default Footer;