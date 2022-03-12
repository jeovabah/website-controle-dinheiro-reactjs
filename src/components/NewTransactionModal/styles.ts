import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2 { 
        color: var(--text-title); 
        font-size: 1.5rem;
        margin-bottom: 2rem; 
    }
    input {
        width: 100%;
        padding:  0 1.5rem;
        height: 4rem;
        background: #E7E9EE;
        border-color: #F0F2F5;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        border: 1px solid #D7D7D7;
        font-size: 1rem;
        font-weight: 400;
        &::placeholder{
            color: var(--text-body)
        }
    }
    button[type="submit"] {
        
        width: 100%;
        border-radius: 0.25rem;
        padding: 0 1.5rem;
        height: 4rem;
        color: #fff;
        font-size: 1rem;
        background: var(--green);
        font-weight: 600;
        border: 0;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    }
`


/*
    &.activeWithdraw {
    background-color: red;
    }
    &.active {
        background-color: green;
    }
*/

export const Button = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;

    button[type="button"] { 
        
    }
`

interface RadioButtonProps {
    isActive : boolean;
    activeColor : "green" | "red";
}

const colors = {
    green: '#33CC95',
    red: '#E52E4D',
}

export const RadioButton = styled.button<RadioButtonProps>`
    height: 4rem;
        border: 1px solid #D7D7D7;
        border-radius: 0.25rem;
       
        background: ${ (props)=>props.isActive 
        ? transparentize(0.9,colors[props.activeColor])
        : "transparent"
        };

        cursor: pointer;
        transition: border-color 0.2s;
        
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        &.depositActive {
            background-color: #D0DFD7;
            opacity: .8;
        }
        &.withdrawActive {
            background-color: #E6D4D7;
            
        }

        &:hover {
            border-color:  ${darken(0.1, "#D7D7D7")} ;
        }
        

        img{
        width: 20px;
        height: 20px; 
        }
        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title)
        }
`


