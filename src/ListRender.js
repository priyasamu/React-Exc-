import React from 'react'
function ListRender(){
    const Env=['Sky','Cloud','Moon'];
    const list=Env.map(en => <h2>{en}</h2>)
    return(
        <div>
            {list}
            
        </div>
    )
}
export default ListRender