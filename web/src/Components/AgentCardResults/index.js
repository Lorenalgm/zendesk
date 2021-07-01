import React from 'react';
import './style.css'


function AgentCardResults (props){
    return (
        <div className="agent-card">
                <img src={props.agent_picture} alt={props.agent} />
                <h1 className={props.color}>{props.agent}</h1>
                <table className="table-dados">
                    <tr>
                        <td><p className="question">Duvidas: {props.question}</p></td>
                        <td><p className="task">Tarefas: {props.task}</p></td>
                    </tr>
                    <tr>
                        <td><p className="problem">Problemas: {props.problem}</p></td>
                        <td><p className="total">Total: {props.total}</p></td>
                    </tr>
                </table>   
        </div>
    );
}

export default AgentCardResults;