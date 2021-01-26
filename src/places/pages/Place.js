import React from 'react';

import Input from '../../shared/FormElement/Input';
import Button from '../../shared/FormElement/Button';
import { useForm } from '../../shared/hooks/form';
import { Validator_require, VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import '../css/UserPlace.css'

const Place = () => {
    const [formState, inputHandler] = useForm(
    {
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false)

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