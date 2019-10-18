import React from 'react';
import PostLoader from './PostLoader';
import { Link } from 'react-router-dom';

export default function MultiplePost({posts, match}){
    const {url} = match;
    return( posts != null ? (
        typeof posts === "string" ? (
             <div> 
                 <h4 className="center red-text"> You are in offline...</h4> 
             </div>
        ) :  posts.length > 1 ? posts.map((post)=>{
             return (
                 <div className="post card" key={ post.id }>
                     <div className="card-content">
                         <Link to={`${url}/${post.id}`}><span className="card-title">{ post.title }</span></Link>
                         <p>{ post.body }</p>
                     </div>
                 </div>
                 
             )
         }) : (
         <div> 
             <h3 className="center">Post Empty!!</h3> 
         </div>
         )
     ) : (
         <div>
            <PostLoader/>
            <PostLoader/>
            <PostLoader/>
            <PostLoader/>
            <PostLoader/>
         </div>
         )
     );


}
