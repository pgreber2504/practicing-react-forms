import useInput from '../hooks/use-input';

const BasicForm = () => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: enteredNameHasError,
        changeValueHandler: changeNameHandler,
        blurHandler: nameBlurHandler,
        reset: resetName,

    } = useInput(value => value.trim() !== '')

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: enteredLastNameHasError,
        changeValueHandler:
        changeLastNameHandler,
        blurHandler: lastNameBlurHandler,
        reset: resetLastName,

    } = useInput(value => value.trim() !== '')

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailHasError,
        changeValueHandler: changeEmailHandler,
        blurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(value => value.includes('@'))


    let formIsValid = false
    if (enteredNameIsValid && enteredLastNameIsValid & enteredEmailIsValid) formIsValid = true;
    else formIsValid = false;

    const invalidClass = 'form-control invalid'

    const resetInputs = () => {
        resetName();
        resetLastName();
        resetEmail();
    }

    const touchedController = (action) => {
        nameBlurHandler(action);
        lastNameBlurHandler(action);
        emailBlurHandler(action)
    }

    const submitHandler = e => {
        e.preventDefault();
        touchedController(true)
        console.log(formIsValid);
        if (!formIsValid) return
        //logic
        console.log(enteredName, enteredLastName, enteredEmail);
        resetInputs()
        touchedController(false)
    }




    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className={enteredNameHasError ? invalidClass : 'form-control'}>
                    <label htmlFor='name'>First Name</label>
                    <input value={enteredName} onBlur={nameBlurHandler.bind(null, true)} onChange={changeNameHandler} type='text' id='name' />
                </div>
                <div className={enteredLastNameHasError ? invalidClass : 'form-control'}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input value={enteredLastName} onBlur={lastNameBlurHandler.bind(null, true)} onChange={changeLastNameHandler} type='text' id='lastName' />
                </div>
            </div>
            <div className={enteredEmailHasError ? invalidClass : 'form-control'}>
                <label htmlFor='email'>E-Mail Address</label>
                <input value={enteredEmail} onBlur={emailBlurHandler.bind(null, true)} onChange={changeEmailHandler} type='text' id='email' />
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;