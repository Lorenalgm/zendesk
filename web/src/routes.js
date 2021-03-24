
import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'

function Routes () {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        </BrowserRouter>
    )
}

export default Routes;