import React, { Component } from 'react';
import NavBar from '../../molecules/NavBar'
import BlogCard from '../../molecules/BlogCard'
import BloogFeed from '../../organisms/BlogFeed/BloogFeed';
import {homeMock} from './Home.mock';
class Home extends Component {
    constructor(props) {
        super(props);
        this.links = [
            {text: 'Servicios', className: 'nav-link text-primary', url: 'http://www.google.com'},
            {text: 'Acerca de', className: 'nav-link text-danger', url: 'http://www.google.com'},
            {text: 'Contacto', className: 'nav-link text-success', url: 'http://www.google.com'}
        ];
        this.data = homeMock;
    }

    render() {
        return (
            <div>
                <NavBar links={this.links}></NavBar>
                <BlogCard style={`banner`}></BlogCard>
                <div className='container'>
                    <div className="row">
                        {this.data.feeds.map((feed, index) => {
                            return <BloogFeed key={index} feed={feed} style={`listed`}></BloogFeed>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home