import React, { useState, useEffect } from 'react';
import { useStyles } from './Tables.styles';
import catalogs from 'constants/catalogs';
import Text from 'components/Text/Text'
import api from 'constants/api';
import TaskButton from 'components/Buttons/TaskButton';
import { useApi } from 'hooks/useApi';
import Preloader from 'components/Utils/Preloader';
import { connect } from 'react-redux';
import * as ACTIONS from 'store/actions';
import axios from 'axios';

import {
    IconButton,
} from '@material-ui/core'

import Done from '@material-ui/icons/Done';
import Close from '@material-ui/icons/Close';
import colors from 'constants/colors';

const { errors, success, toast } = catalogs



const TodoTable = (props) => {
    const css = useStyles();
    const { addToast , reFecth, fetch} = props
    const [tasks, setTasks] = useState([]);
    
    const { response, loading, error } = useApi({
        method: 'GET',
        url: api.tasks,
        headers: {
            accept: '*/*'
        },
        data: {},
    }, fetch);

    //MAIN FUNCTIONS


    const getTasks = () => {
        if (!error && response && response.length) {
            setTasks(response)
            toast['message'] = success.tasks
            toast['success'] = true
            addToast(toast)
        }
        if (error) {
            toast['message'] = error
            addToast(toast)
        }
    }

    const renderButton = (icon, click) => {
        return (<IconButton
            onClick={click}
        >
            {icon}
        </IconButton>);
    }

   

    const setComplete = (task, index) => {
        task["completed"] = true
        axios.put(api.tasks  + `/${index}`, task, {
            headers: {
                accept: '*/*'
            }
        }).then((res) => {
            console.log(res)
            if(res.data){
                toast['success'] = true
                toast['message'] = success.taskCompleted
            }
        }).catch(err => {
            toast['message'] = errors.serverError
        }).finally(()=>{
            addToast(toast)
            reFecth()
        })
    }

    const deleteTask = (task, index) => {
       
        axios.delete(api.tasks + `/${index}`, {}, {
            headers: {
                accept: '*/*'
            }
        }).then((res) => {
            console.log(res)
            if(res.data){
                toast['success'] = true
                toast['message'] = success.taskDeleted
            }
        }).catch(err => {
            toast['message'] = errors.serverError
        }).finally(()=>{
            addToast(toast)
            reFecth()
        })
    }


    useEffect(() => {
        getTasks()
    }, [response, loading, error])





    return (

        <div className={css.tableWrapper}>
            {loading ? <Preloader /> :
                tasks.map((task) => (
                    <div className={css.task} key={task.id}>
                        <div className={css.taskInfo}>
                            <Text color={task.completed ? colors.primary : colors.darkest} type="tasktitle">
                                {task.name.toUpperCase()}
                            </Text>
                            <Text color={task.completed ? colors.primary : colors.dark} type="small">
                                {task.description}
                            </Text>

                        </div>
                        <div className={css.taskActions}>
                            {!task.completed ? <TaskButton
                                render={renderButton}
                                icon={<Done />}
                                click={() => setComplete(task, task.id)}
                            /> : null}
                            <TaskButton
                                render={renderButton}
                                icon={<Close />}
                                click={() => deleteTask(task, task.id)}
                            />
                        </div>
                    </div>
                ))}
        </div>


    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToast: (toast) => dispatch(ACTIONS.addToast(toast))
    }
}

export default  connect(null, mapDispatchToProps)(TodoTable);