import React from 'react'
function Fruits({fruit,key}){
    return(
    <div>
    <h2>{key} This is {fruit.fruitName} and export unit is {fruit.Unit}</h2>
    </div>
    )
}
export default Fruits