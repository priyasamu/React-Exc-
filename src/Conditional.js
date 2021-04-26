import React,{Component} from 'react'
class Conditional extends Component{
    constructor(){
        super()
        this.state={
            isLogin:false,
        }
    }

    render(){
    // Conditional renderin using if else
    //     if(this.state.isLogin){
    //           return(
    //         <div>
    //             <h4>Welcome Username</h4>
    //         </div>
    //          )
    //    }
    // else{
    //     return(
    //         <div>
    //             <h4>Welcome All</h4>
    //         </div>
    //          )
    //     }
    // Conditional renderin using element variable
    let userlist;
    if(this.state.isLogin){
        userlist=<div>Welcome all</div>
    }
    else{
        userlist=<div>Welcome User</div>
    }
    
    // Conditional renderin using element variable  // <div>
    return(
        <div>
         <h3>{userlist}</h3>
        </div>
    )
// conditional rendering using short circuit operator
        // return this.state.isLogin && <div>Welcome All</div>
     // conditional rendering using ternary operator   
    //   this.state.isLogin?(`Welcome All`):(`Welcome User`)



     
    
    }
}
export default Conditional