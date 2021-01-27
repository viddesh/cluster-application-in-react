const Validator_type_require = 'REQUIRE';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';



export const Validator_require = () => ({ type: Validator_type_require });

export const VALIDATOR_MINLENGTH = val => ({
    type: VALIDATOR_TYPE_MINLENGTH,
    val: val
  });

export const validate = (value, validators) => {
    let isValid = true;
    for (const validator of validators) { 
        if(validator.type === Validator_type_require)
            isValid = isValid && value.trim().length > 0;
        if (validator.type === VALIDATOR_TYPE_MINLENGTH)
            isValid = isValid && value.trim().length >= validator.val;
    }
    return isValid
}