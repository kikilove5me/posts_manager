import React from 'react'
import classes from './MyInput.module.css';

export const MyInput = (props, ref) => {
    return (
        <input className={classes.MyInput} {...props} />
    )
};
