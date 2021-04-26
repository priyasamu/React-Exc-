import { getDefaultNormalizer } from '@testing-library/dom'
import React ,{Component} from 'react'
// function Event(){
//     function eventClick(){
//     console.log('Button Clicked');
// }
// return(
//     <div>
//         <button onClick={eventClick()}>Event Click</button>
//     </div>
// )
// }

class Event extends Component{ 

    constructor(){
        super()
        this.state={
            message:'Welcome All'
        }
        // using constructor bind
        // this.eventClick=this.eventClick.bind(this)
    }
    // using arrow function as class property
eventClick=()=>{
    this.setState({
        message:'Thank Yoouu!'
    })
    console.log(this);
}
// instead of using normal function usimg arrow function as class proprty eg:above
// eventClick(){
//     this.setState({
//         message:'Thank Yoouu!'
//     })
//     console.log(this);
// }
render(){
    return(
        <div>
            <h3>Event Handling and Event Binding</h3>
            <h4>{this.state.message}</h4>
            {/* using bind keyword */}
            {/* <button onClick={this.eventClick.bind(this)}>Class Click</button> */}
            {/* using arrow function */}
            {/* <button onClick={()=>this.eventClick()}>Class Click</button> */}
            <button onClick={this.eventClick}>Class Click</button>

        </div>
    )
}
}
export default Event