import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Home() {        
    var today = new Date(),
    data = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // const data =  Date('Y-m-d');
    const [luma, setLuma] = useState('');
    const [lucas, setLucas] = useState('');
    const [douglas, setDouglas] = useState('');
    const [jean, setJean] = useState('');
    
    async function searchLumaTickets(){
        const response = await api.get(`/tickets/?filter=tags:luma solved:${data}`);
        console.log(response.data);
        setLuma(response.data);
    }

    async function searchLucasTickets(){
        const response = await api.get(`/tickets/?filter=tags:lucas solved:${data}`);
        console.log(response.data);
        setLucas(response.data);
    }

    async function searchDouglasTickets(){
        const response = await api.get(`/tickets/?filter=tags:douglas solved:${data}`);
        console.log(response.data);
        setDouglas(response.data);
    }

    async function searchJeanTickets(){
        const response = await api.get(`/tickets/?filter=tags:jean solved:${data}`);
        console.log(response.data);
        setJean(response.data);
    }

    useEffect(() => {
        searchLumaTickets();
        searchLucasTickets();
        searchDouglasTickets();
        searchJeanTickets();

    },[])

    return (
        <div className="container-candidates">
            <h1>Tickets resolvidos hoje - {data}</h1>
                    <div className="candidates">                            
                                <div>
                                    <div className="experience"><h2>Luma:{luma}</h2></div>
                                    <div className="experience"><h2>Lucas:{lucas}</h2></div>
                                    <div className="experience"><h2>Douglas{douglas}</h2></div>
                                    <div className="experience"><h2>Jean:{jean}</h2></div>
                                </div>                       
                    </div>


        </div>
    )
}