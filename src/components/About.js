import React, { Component } from 'react';



import RainBow from './hocs/RainBow';
 class About extends Component {
    render() {
        return (
            <div className="container">
            <h1 className="center">About Page</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat libero ducimus praesentium labore. Commodi consequatur eaque error nemo ut nisi sed praesentium quia saepe maiores. Nostrum incidunt minus voluptate pariatur?</p>
        </div>
        )
    }
}

export default RainBow(About);
