import React from 'react'
 function Test(props){
    console.log(props)

    return(
     
      <div>
      <h2 className='dummyClass'>Welcome {props.name} Lastname {props.lastname}</h2>
      {props.children}
     </div>
   )

  }

// const Test=()=>{
//     return React.createElement(
//     'div',{
//     id:'H1check',
//     className:'DemoClass'
//     },
//     'Check',
//     React.createElement('span',null,'Check Child'),"Welcome");
// }

export default Test
