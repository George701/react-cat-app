import React, { Component } from 'react';

 class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="brand">CAT&#179;</div>
                <div className="head-links">
                    <a href="https://github.com/George701" className="unit-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github-square fa-2x"/>
                    </a>
                    <a href="https://github.com/George701/react-cat-app" className="unit-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-folder-open fa-2x"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Header;