import React,{Component} from 'react';

const h1style={
    backgroundColor:"black",
    color:"yellow"
}
class Msg extends Component{
    
    render(){
        console.log(Component);
     return( 
     <div>
     <h1 style={{color:"red"}}>Welcome{this.props.name}</h1>
     <button>Click me</button>
     </div>
     )
    }
}
export default Msg








