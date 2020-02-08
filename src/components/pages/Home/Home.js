import React, { Component } from 'react';
import NavBar from '../../molecules/NavBar'
import BlogCard from '../../molecules/BlogCard'
import BloogFeed from '../../organisms/BlogFeed/BloogFeed';
import Footer from '../../organisms/Footer';
import {homeMock} from './Home.mock';
class Home extends Component {
    constructor(props) {
        super(props);
        this.data = homeMock;
        this.links = this.data.links;

    }

    render() {
        return (
            <div>

                <NavBar links={this.links}></NavBar>
                <br/>
                <BlogCard style={`banner`}></BlogCard>
                <div className='container'>
                    <div className="row">
                        {this.data.feeds.map((feed, index) => {
                            return <BloogFeed key={index} feed={feed} style={`listed`}></BloogFeed>
                        })}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home