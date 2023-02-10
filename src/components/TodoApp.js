import { Button, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system';
import React, { useState } from 'react'

const TodoApp = () => {
    const [inputVal,setInputVal] = useState('');
    const [inputArr,setInputArr] = useState([]);
    const addItems = () => {
        if(!inputVal){
            alert("please give some data");
        }else{
        setInputArr([...inputArr,inputVal]);
        }

    }
  return (
   
    
    <div className='main_div'>
        <div className='center_div'>
        <Typography variant='h4' id="h4">Todo App</Typography><br />
        <TextField label="Add item" variant="outlined" onChange={(e)=>{setInputVal(e.target.value)}} />
        <br></br><br></br>
        <Button variant='contained' color='primary' onClick={addItems}>Add</Button>
         
        <ol>
            {
                inputArr.map((val,ind)=>{
                    return <li>{val}</li>
                }
                )}
        </ol>
        
        </div>

    </div>
    
   
  )
}

export default TodoApp