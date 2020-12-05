import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/index';
import Personagens from '../pages/repository/index';





const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/personagens/?name=' component={Personagens} />
    </Switch>
);




export default Routes;