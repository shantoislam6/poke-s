import React, { Component } from 'react';
import axios  from 'axios';
import MultiplePost from './childs/MuliplePosts';

export default class Posts extends Component {
    _isMouted = false;
    state = {
        posts: null,
        post: null,
    }
    
   async componentDidMount() {
       this._isMouted = true;
        try{

            const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
            if(this._isMouted){
                this.setState({
                    posts: posts.data.slice(1,10),
                })
            }

        }catch(err){
            if(this._isMouted){
                this.setState({
                    posts: err.message
                })
            }
            console.log(err.message);
        }
        
       
    }
    componentWillUnmount(){
        this._isMouted = false;
    }
    render() {
        const { posts } = this.state;
        return (
            <div className="container">
                <h1 className="center">Posts Page</h1>
               <hr/><br/>
               <MultiplePost {...this.props} posts={posts}/>
            </div>
        )
    }
}


