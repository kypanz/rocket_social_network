import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function Post() {
  const [message, setMessage] = React.useState('');
  return (
    <div>
        <TextField
          id="post"
          label="Message to post ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" style={{marginLeft:'40px'}} onClick={() => alert('This is only for example')} >
          Post
        </Button>
    </div>
  )
}
