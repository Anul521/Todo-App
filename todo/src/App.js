import { useState } from 'react';
import './App.css';
<<<<<<< HEAD
=======


>>>>>>> 30e39dd98cf1ca7d8408038548144d169ffe9381
let nextid = 2;
function App() {
 

    let [todo,updateInput]    =useState("")
    let [todoList,setTodoList]    =useState([{ id :1,task:'learn'}])
    
    function addNewTodo(){
       let newTodos = [...todoList,{id :nextid++ ,task:todo}]
       setTodoList(newTodos)
       updateInput("")
    }
    function deleteTodo(id){
     let updatedTodos= todoList.filter(
        (todo)=>{
          return todo.id!==id
        }
      )
      setTodoList(updatedTodos)
      


    }
  return (
    <div className='container mt-5' >
       <h3 className='text-center'>Todo using React</h3>

      <div className='input-group'>
        <input className='form-control' type ='text' onChange={(e)=>{
          let task = e.target.value
          updateInput(task);

        }}value ={todo}/>
        <button onClick={()=> addNewTodo()}className='btn btn-primary'>Add</button>
          
      </div>
      <ul className='list-group mt-4'>
         {/* <li className='list-group-item'>
          <p> todo1</p>
          <button className='btn btn-danger'> Delete</button>
         </li>
      
      <li className='list-group-item'>
      <p> todo2</p>
      <button className='btn btn-danger'> Delete </button>
      </li> */}
       {
        todoList.map(
          (todoList)=>{
            return (
              <li key ={todoList.id} className='list-group-item'>
               <p> {todoList.task}</p>
              <button onClick={()=>deleteTodo(todoList.id)} className='btn btn-danger'> Delete</button>
              </li>

            )
          }
        )
       }
      </ul>
     
    </div>
  );
}

export default App;
