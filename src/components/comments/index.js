import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

function Comments() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const handleDelete = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
      };
    
      return (
        <>
          {comments.map(comment => (
            <Box key={comment.id} display="flex" alignItems="center" mb={2}>
                <Typography variant="body1" color="textPrimary" style={{ marginRight: '20px' }}>
                    {comment.text}
                </Typography>
                <Button variant="outlined" onClick={() => handleDelete(comment.id)}>
                    Удалить
                </Button>
            </Box>
          ))}
        </>
      );
    };

export default Comments;