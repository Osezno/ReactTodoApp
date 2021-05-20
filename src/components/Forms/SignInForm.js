import React, { useState, useEffect } from 'react';
import { useStyles } from './Form.styles';
import { notEmail, notPasswordLogin } from './validations';
import catalogs from 'constants/catalogs';


import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Typography,
} from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



const { errors, success, inputStr, toast } = catalogs



const SignInForm = (props) => {
    const { addAuthUser, addToast } = props
    const classes = useStyles();

    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    //snackbar
    const [loading, setLoading] = useState(false);



    const [formData, setFormData] = useState({
        email: undefined,
        password: undefined,
        showPassword: false
    });

    const { email, password, showPassword } = formData;

    //GENERAL FUNCTIONS
    const handleClickShowPassword = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
    };

    const validate = (data) => {
        const { password, email } = data;

        if (!email || !password) {
            setError(true)
            setErrorMessage(errors.default)
            return false
        }
        if (notPasswordLogin(password)) {
            setError(true)
            setErrorMessage(errors.passwordReq)
            return false
        }
        if (notEmail(email)) {
            setError(true)
            setErrorMessage(errors.mail)
            return false
        }

        setError(false)
        setErrorMessage('')
    }


    //MAIN FUNCTIONS
    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        setLoading(true)
        if (formData.password === "R6_w4m5n.qpaKYK") {
            addAuthUser({ username: formData.email, id_estatus: 1, id_rol: 1 })
            toast['message'] = success.login
            toast['success'] = true
        }
        else {
            toast['message'] = errors.password
        }

        setLoading(false)
        addToast(toast)
    }


    useEffect(() => {
        if (typeof email !== 'undefined') validate(formData)
    }, [formData, email])


    return (

        <form onSubmit={handleSignIn} className={classes.form}>
            <TextField
                className={classes.inputs}
                label={inputStr.email}
                type="email"
                size="small"
                name="email"
                value={email || ''}
                onChange={handleChange}
                focus="true"
            />
            <TextField
                className={classes.inputs}
                type={showPassword ? 'text' : 'password'}
                label={inputStr.password}
                name="password"
                value={password || ''}
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Mostrar/Ocultar contraseña"
                                onClick={() => { handleClickShowPassword() }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            {error && <Typography variant="subtitle2" color="error">{errorMessage}</Typography>}
            <Button
                // className={classes.inputs}
                variant="contained"
                color="primary"
                type="submit"
                disabled={error || loading}
                style={{ textTransform: 'none', marginTop: 10 }}
            >
                {loading ? inputStr.load : inputStr.login}
            </Button>
        </form>

    )
}





export default SignInForm;