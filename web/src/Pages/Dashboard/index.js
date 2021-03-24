import React from 'react';
import './style.css';
import IndicatorCard from '../../Components/IndicatorCard'

function Dashboard (){
    return (
        <div className="dashboard-container">
            <header className="indicator-header">
                <h2>Indicadores da semana</h2>
                <p>06/01 - 12/01</p>
            </header>

            <div className="indicators-container">
                < IndicatorCard color="sucess" number="23" text="Resolvidos"/>
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