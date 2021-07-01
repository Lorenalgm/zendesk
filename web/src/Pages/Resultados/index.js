import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css';
import AgentCard from '../../Components/AgentCardResults'
import AgentsSkeleton from '../../Components/AgentsSkeleton'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Results() {
    const [loading, setLoading] = useState(false);

    const [inicialDate, setInicialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [agentInfos, setAgentInfos] = useState([]);
    const [agentes, setAgentes] = useState(
            [
                {
                    name:'lucas',
                    image:'https://trello-attachments.s3.amazonaws.com/60353fe07ac21479926b9f40/511x512/70456850a92e4d8718e6f7613e066e66/Screenshot_3.png'
                },
                {
                    name:'luma',
                    image:'https://trello-attachments.s3.amazonaws.com/6036bbbae08c87245655c33e/247x256/4295998a229b8199a8e63e3d50d23cba/image.png'
                },
                {
                    name:'douglas',
                    image:'https://trello-attachments.s3.amazonaws.com/6035712992fb3687357181b6/792x793/503a808e6af8a30822fee82ecca57fdb/img_-_Douglas_Esp%C3%ADndola.png'
                },
                {
                    name:'aureane',
                    image:'https://ca.slack-edge.com/T56FFG3EW-U01U6B19UFN-2a39f84e3a7d-512'
                },
                {
                    name:'uber',
                    image:'https://trello-attachments.s3.amazonaws.com/603481895db937125c03e74e/6035669cd828620144745941/af370852f7956cc1da2c024e1e55ffd3/image.png'
                },
                {
                    name:'alexandre',
                    image:'https://trello-attachments.s3.amazonaws.com/604bccc4d51c2b27a69d9cd4/195x197/1af6bb25c8f05b934a163386daabac39/Screenshot_65.png'
                },
                {
                    name:'gabriel',
                    image:'https://ca.slack-edge.com/T56FFG3EW-U01PVV09MT6-f77d984f9feb-512'
                },
                {
                    name:'drianne',
                    image:'https://trello-attachments.s3.amazonaws.com/6036b82d00e3de2b27796ff7/960x1280/3d94b336907be4f26cf5e2dd1ef60791/foto_atualizada.jpeg.jpg'
                },
                {
                    name:'fernanda',
                    image:'https://trello-attachments.s3.amazonaws.com/6035439118587528d04f1cf3/538x678/b8b4f30540823c59704b5976cd3ede74/image.png'
                },
                {
                    name:'giovanna',
                    image:'https://trello-attachments.s3.amazonaws.com/60353fe15584ee18e0dd08d1/1153x2048/526869e1b4204291de6fe2d3fa9e6c54/EqgilqwXAAMboqL_-_Giovanna_Lourinho.png'
                },
            ]
        );
        async function searchResultsTickets(e){
            e.preventDefault();
            if (!loading) {
                try{
                    setLoading(true);
                    let AgentsInfoTemp = [];
                    for (const agente of agentes){
                        let infoAgent = {};
                        infoAgent = {
                            ...infoAgent,
                            name:agente.name?agente.name:'Nao encontrado',
                            image:agente.image?agente.image:'Nao encontrado'
                        }
                        const response = await api.get(`/tickets/?filter=tags:${agente.name} status:solved status:closed solved>=${inicialDate} solved<=${finalDate}`);
                        infoAgent = {
                            ...infoAgent,
                            total:response.data?response.data:0
                        }

                        const response2 = await api.get(`/tickets/?filter=tags:${agente.name} ticket_type:question status:solved status:closed solved>=${inicialDate} solved<=${finalDate}`);
                        infoAgent = {
                            ...infoAgent,
                            question:response2.data?response2.data:0
                        }

                        const response3 = await api.get(`/tickets/?filter=tags:${agente.name} ticket_type:task status:solved status:closed solved>=${inicialDate} solved<=${finalDate}`);
                        infoAgent = {
                            ...infoAgent,
                            task:response3.data?response3.data:0
                        }

                        const response4 = await api.get(`/tickets/?filter=tags:${agente.name} ticket_type:problem status:solved status:closed solved>=${inicialDate} solved<=${finalDate}`);
                        infoAgent = {
                            ...infoAgent,
                            problem:response4.data?response4.data:0
                        }
                        AgentsInfoTemp = [
                            ...AgentsInfoTemp,
                            infoAgent
                        ]
                    }
                    setAgentInfos([
                            ...AgentsInfoTemp
                        ])
                }catch(error){
                    console.log('erro ao carregar dados: '+error.message);
                }finally{
                    setLoading(false);
                }
            }              
        }
    return (
        <div className="tickets-container-results">
            <header className="tickets-header">
                <div className="menu">
                    <Link className="button" to='/dashboard'>Dashboard semanal</Link>
                    <Link className="button" to='/'>Acompanhamento diário</Link>
                </div>
                <h1>Resultados da semana</h1>
                <form onSubmit={searchResultsTickets}>
                    <input type="date" name="" id="inicialDate" onChange={e => setInicialDate(e.target.value)} value={inicialDate}/>
                    <input type="date" name="" id="finalDate" onChange={e => setFinalDate(e.target.value)} value={finalDate}/>
                    <button type="submit" className="form-button" id="searchButton"> <FaSearch /></button>
                </form>
            </header>

            {loading && <AgentsSkeleton />}
            <div className="agents-container-results">
            {!loading && (
                agentInfos.map((agente)=>{
                    return(
                            <AgentCard 
                                agent_picture={agente.image}
                                agent={agente.name} total={agente.total} question={agente.question} task={agente.task} problem={agente.problem}
                            />   
                        
                    )
                }) 
                
            )}
            </div>
        </div>
    )
}