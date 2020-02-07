import React, { Component } from 'react';
import BlogCard from '../../molecules/BlogCard';
import {feedMock} from './Feed.mock';
import BlogCategory from '../../atoms/BlogCategory';
import './BlogFeed.css';
class BloogFeed extends Component {
  constructor(props) {
      super(props);
      this.feed = props.feed ? props.feed : feedMock;
  }
  render() {
    return (
        <div className='container'>
            <div className="card">
                <BlogCategory styleName={`text-primary align-self-start category`}>{this.feed.category}</BlogCategory>
                <div className="row">
                    {this.feed.blogs.map((blog, index) => {
                        return <BlogCard key={index} blog={blog} style={`listed`}></BlogCard>
                    })}
                </div>
                <hr/>
            </div>
            
            
        </div>
    );
  }
}

export default BloogFeed
