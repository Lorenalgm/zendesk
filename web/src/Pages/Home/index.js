import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css';
import AgentCard from '../../Components/AgentCard'
import AgentsSkeleton from '../../Components/AgentsSkeleton'
import { Link } from 'react-router-dom';

export default function Home() {        
    var today = new Date(),
    data = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const [loading, setLoading] = useState(true);

    const [luma, setLuma] = useState('');
    const [lumaPending, setLumaPending] = useState('');

    const [lucas, setLucas] = useState('');
    const [lucasPending, setLucasPending] = useState('');

    const [douglas, setDouglas] = useState('');
    const [douglasPending, setDouglasPending] = useState('');

    const [jean, setJean] = useState('');
    const [jeanPending, setJeanPending] = useState('');

    const [aureane, setAureane] = useState('');
    const [aureanePending, setAureanePending] = useState('');
    
    useEffect(() => {
        async function searchLumaTickets(){
            const response = await api.get(`/tickets/?filter=tags:luma solved:${data}`);
            setLuma(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:luma status:pending`);
            setLumaPending(response2.data);
        }

        async function searchLucasTickets(){
            const response = await api.get(`/tickets/?filter=tags:lucas solved:${data}`);
            setLucas(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:lucas status:pending`);
            setLucasPending(response2.data);
        }

        async function searchDouglasTickets(){
            const response = await api.get(`/tickets/?filter=tags:douglas solved:${data}`);
            setDouglas(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:douglas status:pending`);
            setDouglasPending(response2.data);
        }

        async function searchAureaneTickets(){
            const response = await api.get(`/tickets/?filter=tags:aureane solved:${data}`);
            setAureane(response.data);

            const response2 = await api.get(`/tickets/?filter=tags:aureane status:pending`);
            setAureanePending(response2.data);
            setLoading(false);

        }

        searchLumaTickets();
        searchLucasTickets();
        searchDouglasTickets();
        searchAureaneTickets();

    },[data])

    return (
        <div className="tickets-container">
            <header className="tickets-header">
                <div className="menu">
                    <Link className="button" to='/dashboard'>Dashboard semanal</Link>
                </div>
                <h1>Tickets do dia</h1>
                <h2>{today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()}</h2>
            </header>
            {loading && <AgentsSkeleton />}
            {!loading && (
                <div className="agents-container">
                    <AgentCard 
                        agent_picture="https://trello-attachments.s3.amazonaws.com/6036bbbae08c87245655c33e/247x256/4295998a229b8199a8e63e3d50d23cba/image.png" 
                        agent="Luma" solved={luma} pending={lumaPending} />
                    <AgentCard 
                        agent_picture="https://trello-attachments.s3.amazonaws.com/60353fe07ac21479926b9f40/511x512/70456850a92e4d8718e6f7613e066e66/Screenshot_3.png" 
                        agent="Lucas" solved={lucas} pending={lucasPending} />
                    
                    <AgentCard 
                        agent_picture="https://trello-attachments.s3.amazonaws.com/6035712992fb3687357181b6/792x793/503a808e6af8a30822fee82ecca57fdb/img_-_Douglas_Esp%C3%ADndola.png" 
                        agent="Douglas" solved={douglas} pending={douglasPending} />
                    
                    <AgentCard 
                        agent_picture="https://ca.slack-edge.com/T56FFG3EW-U01U6B19UFN-2a39f84e3a7d-512" 
                        agent="Aureane" solved={aureane} pending={aureanePending} />     

                </div>
            )}

            <div className="total">
                    <h3>Total N2</h3>
                    <p>{luma+lucas+douglas+jean+aureane} resolvidos </p>
                    <p>{lumaPending+lucasPending+douglasPending+jeanPending+aureanePending} pendentes</p> 
            </div>

        </div>
    )
}