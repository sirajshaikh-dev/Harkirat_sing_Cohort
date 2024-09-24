import { useState } from 'react'

// function App() {
//   const [count,setCount]=useState(0)

//   return (
//       <div>
//          <CustomButton count={count} setCount={setCount} > </CustomButton>
//       </div>
//   )
// }
// //component
// function CustomButton(props) {

//   function onClickHandler(){
//      props.setCount(props.count + 1)
//   }
//   return <button onClick={onClickHandler}>
//       counter {props.count}
//   </button>
// }
// export default App

/*Time: 1:40:00 */
/* Questions Time: 1:50:00 
1.whenever a state changes it trigger the component re-render but the component also re-render if props of the component changes.
if Yes? then How react is wondering the props as it is monitoring the state variable only */
function App() {
  const [todos,setTodos]=useState( [{
    title: "Read Book",
    description: "Read page 9",
    completed: false,
  },{
    title: "Learn React",
    description: "week 5.1",
    completed: true,
  }]);

  function addTodo(){
    // [1,2]
    // [..todos,3]=>[1,2,3]
    setTodos([...todos,{
      title:"new Todo",
      description: "desc of new todo"
    }])
  }
  return (
    <div>
          <Todo title="siraj" description="abc"></Todo>
          {/* Ugly way */}
          {/* {<Todo title={todos[0].title} description={todos[0].description} />}
          {<Todo title={todos[1].title} description={todos[1].description} /> } */}
          {/* Easy way */}
          {todos.map((todo)=>{
            return <Todo title={todo.title} description={todo.description}></Todo>
          })}
          {/* Button to add multiple todo */}
          <button onClick={addTodo}>add a random todo</button>
       </div>
  )
}
//component
function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
 }
export default App