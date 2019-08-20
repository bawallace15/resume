import React from 'react'

const TopMenu = ({ items }) => {
    return (
        <div>
            <header>
                <div className='container'>
                    <h1 className='title'>Ben Wallace</h1>
                    <nav>
                        <ul>
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