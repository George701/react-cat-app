import React, { Component } from 'react';

 class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="brand">CAT&#179;</div>
                <div className="head-links">
                    <a href="https://github.com/George701" className="unit-link">
                        <i className="fab fa-github-square fa-3x"/>
                    </a>
                    <a href="https://github.com/George701/react-cat-app" className="unit-link">
                        <i className="fas fa-folder-open fa-3x"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Header;