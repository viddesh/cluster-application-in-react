import React from 'react';

import Input from '../../shared/FormElement/Input';
import { Validator_require} from '../../shared/util/validators';
import '../css/UserPlace.css'

const Place = () => {
    return <form className="place-form">
        <Input element="input" type="text" label="Title" errorText={'please enter title'} validators={[Validator_require()]}/>
    </form>
}

export default Place;