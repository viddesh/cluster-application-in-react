import React, {useReducer} from 'react';

import { validate } from '../../shared/util/validators';
import './input.css';

const InputReducer = (state, action) => {  
    switch(action.type){
        case 'change':
            return{
                Value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'touch':
            return{
                ...state,
                isTouched: true
            }
        default:
            return state
    }
}

const Input = props => {
    const [inputState, dispatch] = useReducer(InputReducer, {Value:'', isTouched: false, isValid:false});
    const changeHandler = event=>{
        dispatch({
            type: 'change',
            val: event.target.value,
            validators: props.validators
        })
    }

    const isTouched = () => {
        dispatch({
            type: 'touch'
        })
    }

    const element = props.element === "input" ? ( <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler} onBlur={isTouched} value={inputState.value} />) : (<textarea id={props.id} rows={props.row || 3} onChange={changeHandler} onBlur={isTouched} value={inputState.value}/>);

    return <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>

}

export default Input