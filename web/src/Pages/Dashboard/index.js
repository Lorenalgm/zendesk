import React, { useState } from 'react';
import api from '../../services/api';
import './style.css';
import IndicatorCard from '../../Components/IndicatorCard';
import { FaSearch } from 'react-icons/fa';
import Navbar from '../../Components/Navbar';

function Dashboard (){

    const [solvedTickets, setSolvedTickets] = useState('');
    const [pendingTickets, setPendingTickets] = useState('');
    const [openTickets, setOpenTickets] = useState('');

    const [inicialDate, setInicialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');


        async function searchSolvedTickets(e){
            e.preventDefault();
            const response = await api.get(`/tickets/?filter=status:solved status:closed solved>=${inicialDate} solved<=${finalDate}`);
            setSolvedTickets(response.data);

            const response2 = await api.get(`/tickets/?filter=status:pending`);
            setPendingTickets(response2.data);

            const response3 = await api.get(`/tickets/?filter=status:open status:new`);
            setOpenTickets(response3.data);
        }

    return (
        <div className="dashboard-container">
        <Navbar />
            <header className="indicator-header">
            
            <h2>Indicadores da semana</h2>
            <form onSubmit={searchSolvedTickets}>
                <input type="date" name="" id="inicialDate" onChange={e => setInicialDate(e.target.value)} value={inicialDate}/>
                <input type="date" name="" id="finalDate" onChange={e => setFinalDate(e.target.value)} value={finalDate}/>
             <button type="submit" className="form-button" id="searchButton"> <FaSearch /></button>
            </form>

            </header>

            <div className="indicators-container">
                < IndicatorCard color="sucess" number={solvedTickets} text="Resolvidos"/>
                < IndicatorCard color="info" number={pendingTickets} text="Pendentes"/>
                < IndicatorCard color="warning" number={openTickets} text="Em aberto"/>
            </div>

        </div>
        )
}

export default Dashboard;