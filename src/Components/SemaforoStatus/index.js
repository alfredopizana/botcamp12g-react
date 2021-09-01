import React from 'react'

function semaforoStatus(props){
    console.log(props)
    return(
        <h1 className={props.customClasses.join("")}>{ props.text }</h1>
    )
}
export default semaforoStatus