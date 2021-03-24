import React from 'react';
import './style.css'


function IndicatorCard (props){
    return (
        <div className="indicator-card">
                <h1>{props.number}</h1>
                <span>{props.text}</span>
        </div>
    );
}

export default IndicatorCard;