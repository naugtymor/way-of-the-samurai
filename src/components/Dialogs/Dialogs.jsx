import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map((d) => <DialogItem name={d.name} id={d.id} img={d.img} key={d.id}/>)
    let messagesElements = state.messages
        .map((m) => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;