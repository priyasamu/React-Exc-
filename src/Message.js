import React,{Component} from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome All"
        }
    }
    changeMsg(){
        this.setState({message:"Thank You"})
    }
    render(){
        console.log(Component);
     return( 
     <div>
     <h1 style={{color:"red"}}>{this.state.message}</h1>
     <button onClick={()=>this.changeMsg()}>Click me</button>
     </div>
     )
    }
}
export default Message