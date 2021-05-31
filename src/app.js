import React, {useState} from "react";
import "./App.css";
import { Button, Card, Form, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  const [todos, setTodos] = useState([
    {
      text: "sample todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    let newTodos = [...todos, { text }];
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

  const [newName, setNewName] = useState('');

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">MyTodo</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                value={newName} onChange={handleChange}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  function handleChange(e) {
    setNewName(e.target.value);
  }
}

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");
  // const [isEditing, setEditing] = useState(false); 

  // const editingTemplate = (<input type="text" value={newName} onChnage={handleChange}/>
  // );

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };


  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>What needs to be done?</b></Form.Label>
      <Form.Control type="text" className="input" 
                    value={value} onChange={e => setValue(e.target.value)} 
                    placeholder="Add new todo"/>
    </Form.Group>
    <br/>
    <Button variant="success" type="submit">Add Item</Button><br/><br/>
    <Button variant="primary mb-3">Show All Tasks</Button>{' '}
    <Button variant="primary mb-3">Show All Active Tasks</Button>{' '}
    <Button variant="primary mb-3">Show All Completed Tasks</Button>
  </Form>
  );
  
}
function Todo({ todo, index, markTodo, removeTodo }) {

  return (
    <div className="todo">
      <span>
      <ToggleButtonGroup type='checkbox' name='genre'>
        <ToggleButton value={'Done'} onClick={() => markTodo(index)}></ToggleButton>
      </ToggleButtonGroup>
      </span>
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>      
      <div>      
        {/* <Button variant="success" >Edit</Button>{' '}  */}
        {/* <Button variant="success" value={newName} onChange={handleChange}>Edit</Button>{' '}  */}
        <Button variant="danger" onClick={() => removeTodo(index)}>Delete</Button>
      </div>
    </div>
  );

  
}