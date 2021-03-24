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
                < IndicatorCard number="23" text="resolvidos"/>
                < IndicatorCard number="23" text="resolvidos"/>
                < IndicatorCard number="23" text="resolvidos"/>
                < IndicatorCard number="23" text="resolvidos"/>
                < IndicatorCard number="23" text="resolvidos"/>
                < IndicatorCard number="23" text="resolvidos"/>
            </div>

        </div>
        )
}

export default Dashboard;