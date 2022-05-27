import React from 'react'
import Posts from '../Posts/Posts'
import Post from '../Posts/Post'
import Grid from '@mui/material/Grid'

// If is not connected
import NoConnected from '../NoConnected/NoConnected'

// Moralis
import { useMoralis } from "react-moralis";

export default function Connected() {

  const { isAuthenticated } = useMoralis();

  return (
    <div>
        {(isAuthenticated) ? (
          <>
          <p> Welcome ! </p>
          <Grid container item xs={5} style={{justifyContent:'center',margin:'auto'}}>
          <p style={{
              background:'#ffff0999',
              padding:'5px',
              marginLeft:'35px'
              }}> 
              This is only a example of how can be, simple design
              <span style={{color:'green'}}>, The raffle is working so ... take a look ! </span>
          </p>
          </Grid>
          <Post />
          <Posts/>
          </>
        ) : <NoConnected />}
    </div>
  )
}
