import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

export default function Form(props){
    const { change, values, disabled, submit, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const correctValue = type === "checkbox" ? checked : value;
        change(name, correctValue);
    }

    return(
        <div>
            <div>{errors.name}</div>
            <div>{errors.size}</div>
            <div>{errors.instructions}</div>
            <SplashImg>
                <div>Build Your Own Pizza</div>
            </SplashImg>
            <div>
                <form onSubmit={onSubmit}>
                    <label>Enter Your Name: 
                        <input
                        type="text"
                        name="name"
                        value={values.custname}
                        onChange={onChange}
                        >

                        </input>
                        <br />
                    </label>
                    <label>Pick a size: 
                        <br />
                        <select onChange={onChange} value={values.size} name="portion">
                            <option value="">- Pick a Size -</option>
                            <option value="small">Small (10")</option>
                            <option value="medium">Medium (14")</option>
                            <option value="large">Large (18")</option>
                        </select>
                        <br />
                    </label>
                    <label>Select your topping/s
                        <br />
                        <input type="checkbox" name="topping1" value="pepperoni" onChange={onChange} />Pepperoni
                        <input type="checkbox" name="topping2" value="sausage" onChange={onChange} />Sausage
                        <input type="checkbox" name="topping3" value="olives" onChange={onChange} />Olives
                        <input type="checkbox" name="topping4" value="peppers" onChange={onChange} />Peppers
                        <input type="checkbox" name="topping5" value="bacon" onChange={onChange} />Bacon
                        <input type="checkbox" name="topping6" value="ham" onChange={onChange} />Ham
                        <br />
                    </label>
                    <label>Special Instructions:
                        <input
                        type="text"
                        name="instructions"
                        value={values.instructions}
                        onChange={onChange} />
                        <br />
                    </label>
                    <button>Submit Order</button>
                </form>
            </div>
        </div>
    )
}

const SplashImg = styled.div`
background-color: red;
width: 100%;
height: 180px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 2.2rem;
`