import { useState } from 'react';

const SimpleInput = () => {
    const [nameInput, setNameInput] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsEmpty = nameInput.trim() === '';
    const enteredNameInvalid = enteredNameTouched && enteredNameIsEmpty;

    let formIsValid;
    if (enteredNameInvalid) {
        formIsValid = false;
    } else formIsValid = true;

    const classes = enteredNameInvalid ? 'form-control invalid' : 'form-control';


    const changeNameHandler = e => {
        setNameInput(e.target.value);
    }

    const nameLoseFocusHandler = e => {
        setEnteredNameTouched(true)
    }

    const submitHandler = e => {
        e.preventDefault();
        setEnteredNameTouched(true);
        if (enteredNameIsEmpty) return

        //LOGIC........

        setNameInput('');
        setEnteredNameTouched(false)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes}>
                <label htmlFor='name'>Your Name</label>
                <input value={nameInput} onChange={changeNameHandler} onBlur={nameLoseFocusHandler} type='text' id='name' />
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;