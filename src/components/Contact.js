import React, { Component } from 'react';
import {Link , Route} from 'react-router-dom';
export default class Contact extends Component {

    componentDidMount() {


    }
    

    render() {
        return (
            <div className="container">
                <h1 className="center">Contact Page</h1>
                <Link to="/contact/form"> Contact Us </Link>

                <div className="row ">
                <br/>
                <br/>

                <div className="s4 left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, harum dignissimos alias nobis impedit perspiciatis, perferendis necessitatibus quod temporibus amet soluta veritatis et at. Vero distinctio architecto eveniet totam quo.
                </div>
                <br/>
                <br/>
                   
                   <Route path="/contact/form" exact> 
                    <form className="col s6 ">
                            <div className="row">
                                <div className="input-field col s12">
                                <input id="name" type="text" className="validate"/>
                                <label htmlFor="name">Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                <label htmlFor="email">Email</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                <input id="password" type="password" className="validate"/>
                                <label htmlFor="password">Password</label>
                                </div>
                            </div>

                        <button className="btn waves-effect waves-light" type="submit" name="action">SEND
                            
                        </button>
                        
                        </form>

                   </Route>
                </div>
                        
            </div>
        )
    }
}