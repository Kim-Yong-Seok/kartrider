import React from 'react';
import '../css/index.css';

function Header({ searchBtn }) {
    
    return (
        <div className="header">
            <p className="title" onClick={ () => { window.location.href='/'; } }>KARTRIDER</p>
            { searchBtn && <img src="/search.png" className="searchBtn" alt="search" /> }
        </div>
    );
}

export default Header;