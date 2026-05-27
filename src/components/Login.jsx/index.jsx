import {useState} from 'react'
import { Navigate, useNavigate } from 'react-router'
import './index.css'

                   
const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [submitError, setSubmitError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const onChangeUsername = event => {
        setUserName(event.target.value)
    }

    const onChangePassword = event => {
        setPassword(event.target.value)
    }

    const renderUserName = () => (
        <>
            <label className='input-label' htmlFor='username'>
                USER NAME
            </label>
            <input
                type='text'
                id='username'
                className='username-input'
                placeholder='UserName'
                value={userName}
                onChange={onChangeUsername}
            />
        </>
    )

    const renderPassword = () => (
        <>
            <label className='input-label' htmlFor='password'>
                PASSWORD
            </label>
            <input
                type='password'
                id='password'
                className='password-input'
                value={password}
                placeholder='Password'
                onChange={onChangePassword}
            />
        </>
    )

    const onSubmitSuccess = () => {
        localStorage.setItem('userDetails', JSON.stringify({
            userName,
            password,
        }),
    )
        navigate('/', {replace: true})
    }

    const onSubmitFailure = message => {
        setSubmitError(true)
        setErrorMessage(message)
    }

    const submitForms = event => {
        event.preventDefault()
        if(userName === '' || password === ''){
            onSubmitFailure('Please enter username and password')
        } else {
            onSubmitSuccess()
        }
    }
    const storedUser = localStorage.getItem('userDetails')
    if(storedUser !== null){
        return <Navigate to="/" />
    }

    return (
        <div className='login-form-container'>
            <img
                src='https://file.aiquickdraw.com/imgcompressed/img/compressed_4d9d21d68507fef8704de36db03c4ff4.webp'
                className="login-website-logo-watche-img"
                alt="website logo"
            />
            <img
                src='https://cdn.shopify.com/s/files/1/0571/6223/6113/files/Blog-Banner.webp?v=1771300489'
                className="login-img"
                alt="website login"
            />
            <form className='form-container' onSubmit={submitForms}>
                <div className='input-container'>{renderUserName()}</div>
                <div className='input-container'>{renderPassword()}</div>
                <button className='login-button' type='submit'>
                    Login
                </button>
                {submitError && <p className='error-message'>*{errorMessage}</p>}
            </form>
        </div>
    )
}


export default LoginForm