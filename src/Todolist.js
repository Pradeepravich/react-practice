import React from 'react'
import "./App.css";
import { Button, Card, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, updateTodo, removeTodo }) {
    return (
      <div
        className="todo"  variant=""      
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span><br /><br />
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}          
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
          {/* <Button variant="outline-primary" onClick={() => updateTodo(index)}>✕</Button> */}
        </div>
      </div>
    );
  }
  
  function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form className="clearfix" onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mt-2 mb-5 float-start" type="submit">
        Submit
      </Button>
    </Form>
    );
  }



const Todolist = () => {
  
    const [todos, setTodos] = React.useState([]);

      // const [todos, setTodos] = React.useState([
      //   {
      //     text: "This is a sampe todo",
      //     isDone: false
      //   }
      // ]);  
    
      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
      
      const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };

      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

      const updateTodo = (index)=>{
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);      
      }
    
      return (
        <div className="app">
          <div className="container">
            <h1 className="text-center mb-4">Todo List</h1>
            <FormTodo addTodo={addTodo} />            
            <div>
              {todos.map((todo, index) => (
                <Card className="mt-5 mb-5">
                  <Card.Body>
                    <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    markTodo={markTodo}                    
                    removeTodo={removeTodo}
                    />
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      );

}

export default Todolist