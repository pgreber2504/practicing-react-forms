import { useState } from 'react';

const SimpleInput = () => {
    const [nameInput, setNameInput] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsEmpty = nameInput.trim() === '';
    const enteredNameInvalid = enteredNameTouched && enteredNameIsEmpty;

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
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes}>
                <label htmlFor='name'>Your Name</label>
                <input value={nameInput} onChange={changeNameHandler} onBlur={nameLoseFocusHandler} type='text' id='name' />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;