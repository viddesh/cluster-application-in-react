import { useCallback, useReducer } from 'react';

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
export const useForm = (initialValue, initialValid) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialValue,
        isValid: initialValid
    })

    const inputHandler = useCallback((id, value, isValid) => { 
        dispatch({
            type:'input_change',
            value: value,
            inputId: id,
            isValid: isValid
        });
    }, []);

    return [formState, inputHandler]
}