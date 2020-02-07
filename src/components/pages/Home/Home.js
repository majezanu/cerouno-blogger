import React, { Component } from 'react';
import NavBar from '../../molecules/NavBar'
import BlogCard from '../../molecules/BlogCard'
class Home extends Component {
    constructor(props) {
        super(props);
        this.links = [
            {text: 'Servicios', className: 'nav-link text-primary', url: 'http://www.google.com'},
            {text: 'Acerca de', className: 'nav-link text-danger', url: 'http://www.google.com'},
            {text: 'Contacto', className: 'nav-link text-success', url: 'http://www.google.com'}
        ];
    }

    render() {
        return (
            <div>
                <NavBar links={this.links}></NavBar>
                <BlogCard style={`listed`}></BlogCard>
            </div>
        );
    }
}

export default Home