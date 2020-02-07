import React, { Component } from 'react';
import BlogTitle from '../../atoms/BlogTitle';
import BlogDate from '../../atoms/BlogDate';
import BlogImage from '../../atoms/BlogImage';
import BlogCategory from '../../atoms/BlogCategory';
import BlogButton from '../../atoms/BlogButton';
import BlogText from '../../atoms/BlogText';
import {blogMock} from './Blog.mock'
import './BlogCard.css';
class BlogCard extends Component {
    constructor(props) {
        super(props);
        this.blog = props.blog ? props.blog : blogMock;
        this.style = props.style;
    }
    isBanner() {
        return this.style === 'banner';
    }
    isListed() {
        return this.style === 'listed';
    }
    render() {
        if(this.isBanner()){
            return(
                <div className="card container blog-card-banner">
                    <div className="row">
                    <BlogImage styleName={`col-7 image-banner`}  image={this.blog.image} />
                    <div className="col text-left">
                        <BlogCategory styleName={`text-primary align-self-start`}>{this.blog.category}</BlogCategory>
                        <BlogTitle>{this.blog.title}</BlogTitle>
                        <BlogDate date={this.blog.date} locale={`es-MX`}></BlogDate>
                        <br/>
                        <BlogButton>Leer más</BlogButton>
                    </div>
                    </div>
                    

                </div>
            );
        } else if(this.isListed()) {
            return(
                <div className="container card blog-card-listed">
                    <div className="row">
                            <div className="col text-left">
                                <BlogImage image={this.blog.image}/>
                                <BlogCategory styleName={`text-primary align-self-start`}>{this.blog.category}</BlogCategory>
                                <BlogTitle>{this.blog.title}</BlogTitle>
                                <BlogDate date={this.blog.date} locale={`es-MX`}></BlogDate>
                            </div>
                        </div>
                </div>
            );
        }

    }
}

export default BlogCard