import React from 'react';

const Header = ({ logo,  text }) => {
    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
      </header>
    )
}

export default Header;