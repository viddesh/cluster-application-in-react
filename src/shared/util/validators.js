const Validator_type_require = 'REQUIRE';


export const Validator_require = () => ({ type: Validator_type_require });

export const validate = (value, validators) => {
    let isValid = true;
    for (const validator of validators) {
        if(validator.type === Validator_type_require)
            isValid = isValid && value.trim().length > 0;
    }
    return isValid
}