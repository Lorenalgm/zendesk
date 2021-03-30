import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css';
import IndicatorCard from '../../Components/IndicatorCard'

function Dashboard (){

    var today = new Date(),
    data = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [solvedTickets, setSolvedTickets] = useState('');

    useEffect(() => {
        async function searchSolvedTickets(){
            const response = await api.get(`/tickets/?filter= solved:${data}`);
            setSolvedTickets(response.data);
        }
        searchSolvedTickets();

    },[data])
    return (
        <div className="dashboard-container">
            <header className="indicator-header">
                <h2>Indicadores da semana</h2>
                <p>27/03 - 02/04</p>
            </header>

            <div className="indicators-container">
                < IndicatorCard color="sucess" number={solvedTickets} text="Resolvidos"/>
                < IndicatorCard color="info" number="23" text="Resolvidos"/>
                < IndicatorCard color="warning" number="23" text="Resolvidos"/>
                < IndicatorCard color="sucess" number="23" text="Resolvidos"/>
                < IndicatorCard color="info" number="23" text="Resolvidos"/>
                < IndicatorCard color="warning" number="23" text="Resolvidos"/>
            </div>

        </div>
        )
}

export default Dashboard;