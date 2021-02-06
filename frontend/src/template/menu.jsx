import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#000", borderRadius: 4 }}>
        <a className="navbar-brand" href="#">
            <i class="fa fa-calendar-check-o" aria-hidden="true"></i> TodoApp
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/todos">Tarefas</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/about">Sobre</Link>
                </li>
            </ul>
        </div>
    </nav>
);