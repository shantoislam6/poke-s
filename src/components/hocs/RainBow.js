import React, { Component } from 'react'

const RainBow = (WrapperComponent)=>{

 
   return class extends Component{
      render(){
         const colors = ['red', 'pink', 'blue', 'orange' , 'lightgreen', 'yellow'];
         const className = colors[ Math.floor(Math.random() * (colors.length) ) ] +'-text'
         return (
           <div className={className}>
                <WrapperComponent {...this.props} />
           </div>
         )
      }
   }
}

export default RainBow;