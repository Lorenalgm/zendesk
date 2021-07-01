
import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Resultados from './Pages/Resultados'

function Routes () {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/resultados" component={Resultados}/>
        </BrowserRouter>
    )
}

export default Routes;