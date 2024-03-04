import React, {useState} from "react";
import "./App.css"
import Lists from "./components/Lists";
import Form from "./components/Form";

//클래스형 컴포넌트
export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  
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


  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>
          <Lists todoData = {todoData} setTodoData={setTodoData}/>
          <Form handleSubmit = {handleSubmit} value = {value} setValue={setValue}/>
      </div>
    </div>
  )
}