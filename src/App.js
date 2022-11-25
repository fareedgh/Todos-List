import './App.css';
import Header from './My Components/Header';
import Todos from './My Components/Todos';
import React, { useState, useEffect } from 'react';
import Footer from './My Components/Footer';
import AddTodo from './My Components/AddTodo';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './My Components/About';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo =  JSON.parse(localStorage.getItem("todos" ));
  }
  const onDelete =  (todo)=>{
    console.log("I am on delete of todo ",todo);

    // Deleting this way inreact does not Work
    //let index = todos.indexOf(todo);
    // todo.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    // localStorage.getItem("todos");
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc) =>{
    console.log("I am adding this todo",title,desc)
    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
 
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState(initTodo);


  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <>
  <Router>
    <Header title = "My Todos List" searchBar = {false}/>
     <Routes>
          <Route exact path="/" element={
          <React.Fragment>
                <AddTodo addTodo = {addTodo}/>
                <Todos todos = {todos} onDelete = {onDelete}/>
            </React.Fragment>
          }/>
          <Route exact path="/about" element = {<About/>}/>
    </Routes>
    <Footer/>
  </Router>
    </>
  );
}
  


export default App;
