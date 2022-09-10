import React from 'react'

export default function Alert(props) {
    return (
        props.alert &&
        <div className="alert" id={"alert"}>
            <span className="closebtn" onClick={props.toggleAlert}>&times;</span>
            <strong>{props.alert.type}!</strong> {props.alert.msg}
        </div>
    )
}