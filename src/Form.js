import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

export default function Form(props){
    const { change, values } = props;

    const onChange = evt => {
        // const { name, value, type, checked } = evt.target;
        // const correctValue = type === "checkbox" ? checked : value;
        // change(name, correctValue);
    }

    return(
        <div>
            <SplashImg>
                <div>Build Your Own Pizza</div>
            </SplashImg>
            <div>
                <form>
                    <label>Enter Your Name: 
                    <br />
                        <input
                        type="text"
                        name="name"
                        value=""
                        onChange={onChange}
                        >

                        </input>
                        <br />
                    </label>
                    <label>Pick a size: 
                        <br />
                        <select>
                            <option value="">- Pick a Size -</option>
                            <option name="size" value="small">Small (10")</option>
                            <option name="size" value="medium">Medium (14")</option>
                            <option name="size" value="large">Large (18")</option>
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
                        <input type="text" name="instructions" value="" onChange={onChange} ></input>
                    </label>
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