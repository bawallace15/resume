import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Resume from '../containers/Resume';

const TopMenu = ({ items }) => {

    return (
            <div>
                <header>
                    <div className='nav-header'>
                        <h1 className='title'>Ben Wallace</h1>
                        <nav>
                            <ul>
                                <li><a href='/'>Home</a></li>
                                <li><a href='#'>Resume</a></li>
                                <li><a href='#'>Quotes</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

            </div>
    )
}

export default TopMenu;