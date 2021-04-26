import logo from './logo.svg';
import './App.css';
import Test from './Test.js';
import Msg from './Msg';
import Message from './Message';
import Increment from './Increment'
import React,{Component} from 'react';
import Event from './Event'
import Conditional from './Conditional'

import ListRender from './ListRender';
import ListOutput from './ListOutput';

class App extends Component {
  render(){
  return (
    <div>
      {/* <Test name="Priya"></Test> */}
     {/* <Message/>
      <Increment/>
      <Event></Event>

<Conditional></Conditional> */}
{/* <LifeCycleA></LifeCycleA> */}
{/* <ListRender></ListRender> */}
<ListOutput></ListOutput>
     </div>
  );
  }
}

export default App;
