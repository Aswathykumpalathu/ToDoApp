import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const ToDo = () => {
 
    var[formValue,setformValue]= useState('');
    var[todoList,settodoList]= useState([]);
    const addList = () =>
    {   
        settodoList([...todoList,formValue])
        setformValue("");
    }
   
      const handleChange = (e) => {
        setformValue(e.target.value);
      };
  return (
    <div>
      <div class="card">
      <Typography gutterBottom variant="h5" component="div">
          To do app
        </Typography>
       <form>
       <input type="text" value={formValue} onChange={handleChange} placeholder="Enter Task"/>
          <br></br>
          
      <Button onClick={addList} variant="contained" color="primary" >Add</Button>
       </form>
       <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default ToDo
