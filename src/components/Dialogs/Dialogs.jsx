import React from 'react';
import d from './dialogs.module.css'
import {NavLink} from "react-router-dom";
import Messages from "./DialogItems/MessageItem/MessageItem";
import DialogItem from "./DialogItems/DialogItem/DialogsItem";


const Dialogs = (props) => {

    let MesAdd = React.createRef();
    let OtpFunc = () => {
        let soob = MesAdd.current.value;
        alert(soob);
    }


    let MessageItems = props.Messagess.map(mes => <Messages message={mes.message} id={mes.id}/>)
    let DialogNames = props.DialogData.map(dia => <DialogItem name={dia.name} id={dia.id}/>)
    return (
        <div className={d.dialogs}>
            <div className={d.users}>
                {DialogNames}
            </div>
            <div>
                {MessageItems}


                <div>
                    <textarea ref={MesAdd}></textarea>
                    <div onClick={OtpFunc}>отправить</div>
                </div>


            </div>

        </div>
    );
}

export default Dialogs;