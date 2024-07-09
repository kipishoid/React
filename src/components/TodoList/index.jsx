import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.length > 0) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Box sx={{ width: '300px', margin: '0 auto', mt: 4 }}>
      <TextField
        label="Новая задача"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <Button
        onClick={handleAddTask}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        fullWidth
      >
        Добавить
      </Button>
      <List sx={{ mt: 2 }}>
        {tasks.map((task, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodoList;
