import React,{Component} from 'react';


class Increment extends Component{

    constructor(){
        super()
            this.state={
                count:0,
            }
        }
        increment(){
            // this.state.count=this.state.count+1;
            this.setState({
                count:this.state.count+1
            });
            console.log(this.state.count);
        }
    
    render(){
        return( 
            <div>
            <h1 style={{color:"red"}}>Count-{this.state.count}</h1>
            <button onClick={()=>this.increment()}>Click me</button>
            </div>
            )
    }
}
export default Increment