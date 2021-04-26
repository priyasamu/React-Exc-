import React from 'react'
import Fruits from './Fruits'

function ListOutput(){
const fruits=[
    {
     id:0,
    fruitName:'Apple',
    Unit:'10Kg',
    orgin:'Kashmir'
    },
    {
        id:1,
        fruitName:'Orange',
        Unit:'20Kg',
        orgin:'Assam'  
    },
    {
        id:2,
        fruitName:'Grapes',
        Unit:'20Kg',
        orgin:'Egypt'  
    }
]
// const list=fruits.map(fruit => <h2>{fruit.fruitName}</h2>)
const fruitList= fruits.map((fruit,index) => <Fruits key={index} fruit={fruit}></Fruits>)   
return(
    <div>
         {fruitList}
         
    </div>
)
}
export default ListOutput