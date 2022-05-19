import { useReducer } from "react"

const inputReducer = (state, action) => {
    if (action.type === "CHANGE_HANDLER") {
        return { ...state, enteredValue: action.value }
    };
    if (action.type === 'BLUR_HANDLER') {
        return { ...state, enteredValueTouched: action.value }
    };
    if (action.type === 'RESET') {
        return { ...state, enteredValue: '' }
    };

    return {}
}

const useInput = (validate) => {

    const [inputValue, dispatchInputValue] = useReducer(inputReducer, {
        enteredValue: '',
        enteredValueTouched: false
    })

    const isValid = validate(inputValue.enteredValue);
    const hasError = !isValid && inputValue.enteredValueTouched

    const changeValueHandler = e => {
        dispatchInputValue({ type: "CHANGE_HANDLER", value: e.target.value })
    }

    const blurHandler = (control) => {
        dispatchInputValue({ type: 'BLUR_HANDLER', value: control })
    }

    const reset = () => {
        dispatchInputValue({ type: "RESET" })
    }


    return { value: inputValue.enteredValue, isValid, hasError, changeValueHandler, blurHandler, reset }


}

export default useInput