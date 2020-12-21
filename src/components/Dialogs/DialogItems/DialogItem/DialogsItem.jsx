import React from 'react';
import d from './../../dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={d.user_style}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={d.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;