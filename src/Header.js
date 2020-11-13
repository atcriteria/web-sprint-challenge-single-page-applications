import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

export default function Header(){

    return(
        <MainContain>
            <div>Lambda Eats</div>
            <div>
                <Link to="/"><Button>Home</Button></Link>
                <Button>Help</Button>
            </div>
        </MainContain>
    )
}

const MainContain = styled.div`
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
height: 60px;
padding: 1% 5% 1% 5%;
background-color: black;
color: white;
font-size: 2.8rem;
font-weight: bold;
`

const Button = styled.button`
width: 100px;
height: 60px;
margin-left: 15px;
color: white;
background-color: black;
font-size: 1.2rem;
cursor: pointer;
`