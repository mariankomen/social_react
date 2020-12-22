import React from 'react';
import d from './dialogs.module.css'
import Messages from "./DialogItems/MessageItem/MessageItem";
import DialogItem from "./DialogItems/DialogItem/DialogsItem";
import {UpdateMessageActionCreator} from "../../redux/state";
import {AddMessageActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    let state = props.store.GetState().DialogComp;

    let OnNewMesClick = () => {
        props.store.dispatch(AddMessageActionCreator());
    }
    let OnNewMesChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(UpdateMessageActionCreator(text));
    }

    let NewMessValue = props.store.GetState().DialogComp.NewMessage;

    let MessageItems = state.Messagess.map(mes => <Messages message={mes.message} id={mes.id}/>)
    let DialogNames = state.DialogData.map(dia => <DialogItem name={dia.name} id={dia.id}/>)

    return (
        <div className={d.dialogs}>
            <div className={d.users}>
                {DialogNames}
            </div>
            <div>
                {MessageItems}
                <div>
                    <div> <textarea value={NewMessValue}
                                    placeholder={'Enter your message: '}
                                    onChange={OnNewMesChange}/></div>
                    <div onClick={OnNewMesClick} className={d.btn_otp}>отправить</div>
                </div>


            </div>

        </div>
    );
}

export default Dialogs;