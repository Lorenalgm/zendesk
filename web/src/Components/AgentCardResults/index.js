import React from 'react';
import './style.css'


function AgentCardResults (props){
    return (
        <div className="agent-card-results">
                <img src={props.agent_picture} alt={props.agent} />
                <h1 className={props.color}>{props.agent}</h1>
                <div className="dados">
                     <p>Tickets Resolvidos</p>
                    <p className="question">Dúvidas: {props.question}</p>
                    <p className="task">Tarefas: {props.task}</p>
                    <p className="problem">Problemas: {props.problem}</p>
                    <p className="total">Total: {props.total}</p>
                </div>  
                {props.chat &&
                (<div className="dados-chat">
                    <p className="number">Chats Atendidos: {props.count_chats}</p>
                    <p className="number">Satisfação: {props.satisfaction}%</p>
                </div>)
                }
        </div>
    );
}

export default AgentCardResults;