import React from 'react';

const Input = (props) =>
{
    return (
    <div className="input">    
        <div>
            <label id={props.id1}>{props.display}</label><br/>
            <input id={props.id2} placeholder={props.holder} type={props.type}></input>
        </div>
    </div>
    )
}

export default Input