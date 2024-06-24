import styled from "styled-components";

const Container = styled.header`
    * {
        background-color: #c55959;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        font-family: 'Courier New', Courier, monospace;
    }

    nav{
        display:flexx;
        width: 100%;
        position: fixed;

        #logo{
            padding: 10px 20px;
        }

        ul{
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li{
            padding-right: 10px;
        }

        a{
            text-decoration: none;
            padding: 0 15px;
        }

        a:hover{
            color: red;
        }

        #login{
            padding: 10px 20px;
            border-radius: 5px;
        }
    }
`;

export default Container;