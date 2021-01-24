import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/FormElement/Input';
import Button from '../../shared/FormElement/Button';
import { Validator_require, VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import '../css/UserPlace.css'

const formReducer = (state, action) => {
    switch(action.type) {
        case 'input_change':
            let formIsValid = true;
            for(const inputId in state.inputs){
                if(inputId === action.inputId)
                    formIsValid = formIsValid && action.isValid
                else
                    formIsValid = formIsValid && state.inputs[inputId].isValid
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {value: action.value, isValid: action.isValid}
                },
                isValid: formIsValid
            }
        default:
            return state
    }
}

const Place = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    })
    

const inputHandler = useCallback((id, value, isValid)=>{ 
    dispatch({
        type:'input_change',
        value: value,
        inputId: id,
        isValid: isValid
    });
}, []);

const formSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs)
}

return <form className="place-form" onSubmit={formSubmitHandler}>
    <Input id="title" element="input" type="text" label="Title" errorText={'please enter title'} validators={[Validator_require()]} onInput={inputHandler}/>
    <Input id="description" element="textarea" label="Description" errorText={'please enter description.(minimum 5)'} validators={[VALIDATOR_MINLENGTH(5)]} onInput={inputHandler}/>
    <Input id="address" element="input" label="Address" errorText={'please enter valid address'} validators={[(Validator_require())]} onInput={inputHandler}/>
    <Button type="submit" disabled={!formState.isValid} title={!formState.isValid}> Submit </Button>
</form>
}

export default Place;