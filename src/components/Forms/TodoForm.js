import React, { useState, useEffect } from 'react';
import { useStyles } from './Form.styles';
import { notLength } from './validations';
import catalogs from 'constants/catalogs';
import api from 'constants/api';
import axios from 'axios';
import { connect } from 'react-redux';
import * as ACTIONS from 'store/actions';

import {
    TextField,
    Button,
    Typography,
} from '@material-ui/core'





const { errors, success, inputStr, toast } = catalogs


const TodoForm = (props) => {
    const { addToast,reFecth } = props
    const classes = useStyles();

    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    //snackbar
    const [loading, setLoading] = useState(false);



    const [formData, setFormData] = useState({
        name: undefined,
        description: undefined,
        completed: false,
    });

    const { name, description } = formData;

    const validate = (data) => {
        const { name, description } = data;

        if (!name || !description) {
            setError(true)
            setErrorMessage(errors.default)
            return false
        }
        if (notLength(name, 4, 12)) {
            setError(true)
            setErrorMessage(errors.nameLength)
            return false
        }
        if (notLength(description, 15, 60)) {
            setError(true)
            setErrorMessage(errors.descriptionLength)
            return false
        }
        setError(false)
        setErrorMessage('')
    }


    //MAIN FUNCTIONS
    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        axios.post(api.tasks, formData, {
            headers: {
                accept: '*/*'
            }
        }).then((res) => {
            if(res.data){
                toast['success'] = true
                toast['message'] = success.taskCreated
            }
        }).catch(err => {
            toast['message'] = errors.serverError
        }).finally(()=>{
            setLoading(false)
            addToast(toast)
            setFormData({
                name: undefined,
                description: undefined,
                completed: false,
            })
            reFecth()
        })
    }


    useEffect(() => {
        if (typeof name !== 'undefined') validate(formData)
    }, [formData, name])


    return (

        <form onSubmit={handleAddTask} className={classes.formCenter}>
            <TextField
                className={classes.inputs}
                label={inputStr.name}
                type="text"
                size="small"
                name="name"
                value={name || ''}
                onChange={handleChange}
                focus="true"
            />
            <TextField
                className={classes.inputs}
                type={'text'}
                label={inputStr.description}
                name="description"
                value={description || ''}
                onChange={handleChange}
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
                {loading ? inputStr.load : inputStr.add}
            </Button>
        </form>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToast: (toast) => dispatch(ACTIONS.addToast(toast))
    }
}



export default connect(null, mapDispatchToProps)(TodoForm);