import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

export default function Home(){

    return(
        <Banner>
            <div>Pizza Delivery While You Code</div>
            <Link to="/pizza"><button>Pizza?</button></Link>
        </Banner>
    )
}

const Banner = styled.div`
width: 100%;
height: 360px;
background-image: url('../assets/Pizza.jpg');
background-color: red;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 4.8rem;
`