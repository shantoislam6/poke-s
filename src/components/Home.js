import React, { Component } from 'react';
export default class Home extends Component {
    
    componentDidMount() {
    }
    render() {
        return (
            <Container>
                <h1 className="center">Home Page</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat libero ducimus praesentium labore. Commodi consequatur eaque error nemo ut nisi sed praesentium quia saepe maiores. Nostrum incidunt minus voluptate pariatur?</p>
            </Container>
        )
    }
}

function Container({children}){
    return (
        <div className="container">
            {children}
        </div>
    )
}