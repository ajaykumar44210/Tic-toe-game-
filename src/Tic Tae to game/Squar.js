import React from 'react' 
const Squar = (props) => {
  return (
    <div
    onClick={props.onClick}  
    className='squar'>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Squar