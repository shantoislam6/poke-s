import React, { Component } from 'react'

export default class TopLoader extends Component {

    state ={
        prograss: 0,
        interVal : null,
    }

    componentDidMount(){
       const interVal =  setInterval(()=>{
            this.props.progressHandle(false);
        },100)
        this.setState({
            interVal:interVal,
        });
    }
    
    componentWillUnmount(){
        this.props.progressHandle(true);
        clearInterval(this.state.interVal);
    }
    render() {
        return (
            <div></div>
        )
    }
}
