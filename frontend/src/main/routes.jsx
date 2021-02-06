import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Todo from '../todo/todo';
import About from '../about/about';

export default props => (
    <Switch>
        <Route path="/todos">
            <Todo />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Redirect strict from="*" to="/todos" />
    </Switch>
);