import React from 'react'
import '../containers/App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Resume from '../containers/Resume';
import Home from '../containers/Home';
import Quotes from '../containers/Quotes';

const TopMenu = () => {

    return (
            <Router>
                <header>
                    <div className='nav-header'>
                        <h1 className='title'>Ben Wallace</h1>
                        <nav>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/resume'>Resume</Link></li>
                                <li><Link to='/quotes'>Quotes</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <Switch>
                    <Route path='/resume'>
                        <Resume />
                    </Route>
                    <Route path='/quotes'>
                        <Quotes />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Router>
    )
}

export default TopMenu;