import { useState } from "react";

const BasicForm = (props) => {
    const [nameInput, setNameInput] = useState('')
    const [lastNameInput, setLastNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('');
    const [nameTouched, setNameTouched] = useState(false)
    const [lastNameTouched, setLastNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false)

    const enteredNameIsValid = nameInput.trim() !== ''
    const enteredLastNameIsValid = lastNameInput.trim() !== ''
    const enteredMailIsValid = emailInput.includes('@');

    const invalidName = !enteredNameIsValid && nameTouched;
    const invalidLastName = !enteredLastNameIsValid && lastNameTouched;
    const invalidEmail = !enteredMailIsValid && emailTouched;

    let formIsValid = false
    if (enteredNameIsValid && enteredLastNameIsValid & enteredMailIsValid) formIsValid = true;
    else formIsValid = false;

    const invalidClass = 'form-control invalid'


    const clearInputs = () => {
        setNameInput('');
        setLastNameInput('');
        setEmailInput('');
    }

    const touchedAfterSubmit = (controls) => {
        setNameTouched(controls);
        setLastNameTouched(controls);
        setEmailTouched(controls);
    }


    const nameChangeHandler = e => {
        setNameInput(e.target.value);
        setNameTouched(true)
    }
    const lastNameChangeHandler = e => {
        setLastNameInput(e.target.value)
        setLastNameTouched(true)
    }
    const emailChangeHandler = e => {
        setEmailInput(e.target.value)
        setEmailTouched(true);
    }

    const focusOutName = e => {
        setNameTouched(true);
    }

    const focusOutLastName = e => {
        setLastNameTouched(true)
    }

    const focusOutMail = e => {
        setEmailTouched(true)
    }

    const submitHandler = e => {
        e.preventDefault();
        touchedAfterSubmit(true)
        console.log(formIsValid);
        if (!formIsValid) return
        //logic
        console.log(nameInput, lastNameInput, emailInput);
        clearInputs();
        touchedAfterSubmit(false)
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className={invalidName ? invalidClass : 'form-control'}>
                    <label htmlFor='name'>First Name</label>
                    <input value={nameInput} onBlur={focusOutName} onChange={nameChangeHandler} type='text' id='name' />
                </div>
                <div className={invalidLastName ? invalidClass : 'form-control'}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input value={lastNameInput} onBlur={focusOutLastName} onChange={lastNameChangeHandler} type='text' id='lastName' />
                </div>
            </div>
            <div className={invalidEmail ? invalidClass : 'form-control'}>
                <label htmlFor='email'>E-Mail Address</label>
                <input value={emailInput} onBlur={focusOutMail} onChange={emailChangeHandler} type='text' id='email' />
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;