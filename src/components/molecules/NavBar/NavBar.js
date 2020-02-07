import React, { Component } from 'react';
import Link from '../../atoms/Link'
class NavBar extends Component {
    
    constructor(props) {
        super(props);
        this.text = props.text;
        this.href = props.href;
        this.links = [
            {text: 'Servicios', className: 'nav-link text-primary', url: 'http://www.google.com'},
            {text: 'Acerca de', className: 'nav-link text-danger', url: 'http://www.google.com'},
            {text: 'Contacto', className: 'nav-link text-success', url: 'http://www.google.com'}
        ];
    }
  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {this.links.map((link, index) => {
                        return <li key={index} className="nav-item">
                                <Link styleName={link.className} href={link.url}>
                                    <h3>{link.text}</h3>
                                </Link>
                            </li> 
                    })}
                    
                </ul>
            </div>
        </nav>
    );
  }
}

export default NavBar