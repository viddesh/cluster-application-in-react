import React, {useCallback, useReducer} from 'react';

import Input from '../../shared/FormElement/Input';
import Button from '../../shared/FormElement/Button';
import { Validator_require} from '../../shared/util/validators';
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
                    [action.isValid]: {value: action.value, isValid: action.isValid}
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

    return <form className="place-form">
        <Input id="title" element="input" type="text" label="Title" errorText={'please enter title'} validators={[Validator_require()]} onInput={inputHandler}/>
        <Input id="description" element="textarea" label="Discription" errorText={'please enter description.'} validators={[Validator_require()]} onInput={inputHandler}/>
        <Button type="submit" disabled={!formState.isValid}> Submit </Button>
    </form>
}

export default Place;