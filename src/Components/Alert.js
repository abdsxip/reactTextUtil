import React from 'react'

export default function Alert(props) {

// const capitalize = (inputs) =>{
//     const lower =  inputs.toLowerCase();
//     return lower.charAt(0).toUpperCase() + lower.slice(1);
// }

  return (
    props.alert &&
    <div> 
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* <strong> {capitalize(props.alert.type)}  : {props.alert.msg} </strong> */}
            <strong> {props.alert.type} : {props.alert.msg} </strong>
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
    </div>
  )
}
    