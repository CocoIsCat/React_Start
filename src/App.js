import React, {useState} from "react";
import "./App.css"

//클래스형 컴포넌트
export default function App() {
  
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "poinder",
    float: "right",
  }

  const getStyle = (completed) => ({
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
  })

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleClick = (id) => {
    let newTodoData = todoData.filter(data => data.id !== id)
    setTodoData(newTodoData);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    //form 안에서 입력 버튼을 눌렀을 때 페이지 리로드 방지
    e.preventDefault();

    let newTodo = {
      id : Date.now(),
      title : value,
      completed : false,
    };

    setTodoData(prev => [...prev , newTodo]);
    setValue("");
  };
  
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        
        {todoData.map((data) => (
          <div style={getStyle(data.completed)} key={data.id}>
          <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)}/>
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
        </div>
        ))}


        <form style={{display:'flex'}} onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="value" 
            style={{flex : '10', padding : '5px'}} 
            placeholder="해야 할 일을 입력하세요." 
            value={value} 
            onChange={handleChange}
          />
          <input 
            type="submit" 
            value="입력" 
            style={{flex: '1'}}
          />
        </form>
      </div>
    </div>
  )
}