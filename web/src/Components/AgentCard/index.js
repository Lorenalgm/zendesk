import React from 'react';
import './style.css'


function AgentCard (props){
    return (
        <div className="agent-card">
                <img src={props.agent_picture} alt={props.agent} />
                <h1 className={props.color}>{props.agent}</h1>
                <p className="solveds">Resolvidos: {props.solved}</p>
                <p className="pending">Pendentes: {props.pending}</p>
        </div>
    );
}

export default AgentCard;