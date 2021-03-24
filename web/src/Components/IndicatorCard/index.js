import React from 'react';
import './style.css'


function IndicatorCard (props){
    return (
        <div className="indicator-card">
                <h1 className={props.color}>{props.number}</h1>
                <p className={props.color}>{props.text}</p>
        </div>
    );
}

export default IndicatorCard;