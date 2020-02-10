import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import Press from '../screens/Press'
import Past from '../screens/Past'
import Contact from '../screens/Contact'
import Lions from '../screens/Lions'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/press' component={Press} />
        <Route exact path='/past' component={Past} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/lions' component={Lions}/>
    </Switch>
)

export default withRouter(Routes)