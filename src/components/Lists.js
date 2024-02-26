import React from 'react'

export default function Lists() {

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "poinder",
        float: "right",
        };

  return (
    <div>        
        {todoData.map((data) => (
        <div style={getStyle(data.completed)} key={data.id}>
        <input 
            type="checkbox" 
            defaultChecked={false} 
            onChange={() => handleCompleteChange(data.id)}/>
        {data.title}
        <button 
            style={btnStyle} 
            onClick={() => handleClick(data.id)}>
            x
        </button>
        ))};
    </div>
  )
}