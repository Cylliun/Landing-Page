import styled from "styled-components";

const Container = styled.header`
    *{
        background-color: #c55959;
        color: #fff;
        font-family: 'Courier New', Courier, monospace;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #c55959;
        z-index: 1000;
    }

    #logo {
        padding: 10px 20px;
    }

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        padding-right: 10px;
    }

    a {
        text-decoration: none;
        padding: 10px 15px;
        color: #fff;
    }

    a:hover {
        color: red;
    }

    #login {
        padding: 10px 20px;
        border-radius: 5px;
        background-color: #fff;
        color: #c55959;
    }

    #login:hover {
        background-color: red;
        color: #fff;
    }
`;

export default Container;
