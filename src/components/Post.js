import React, { Component } from 'react';
import axios from 'axios';
import PostLoader from './childs/PostLoader';

export default class Post extends Component {
    _isMouted = false;
    state = {
        post: null,
    }

    style = {
        PostItem: {
            padding : '20px',
            margin : "50px 0"
        }
    }
    
   async componentDidMount() {
       this._isMouted = true;
        try{
            const { id } = this.props.match.params;
            const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if(this._isMouted){
                this.setState({
                    post: post.data
                })
            }

        }catch(err){
            if(this._isMouted){
                this.setState({
                    post: err.message
                })
            }
            console.log(err.message);
        }
        
       
    }
    componentWillUnmount(){
        this._isMouted = false;
    }
    render() {
        const post = this.state.post;
        return (
            <div className="container" style={{marginTop: "95px"}}>
                { post !== null ? (
                    <div className="post card" key={ post.id }>
                        <div className="card-content">
                         <span className="card-title">{ post.title }</span>
                         <p>{ post.body }</p>
                     </div>
                  </div>
                ) : (
                    <div>
                       <PostLoader></PostLoader>
                    </div>
                )}
            </div>
        )
    }
}
