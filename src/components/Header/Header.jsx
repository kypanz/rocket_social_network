import React from 'react'
import Grid from '@mui/material/Grid'
import { Divider } from '@mui/material'

// Buttons actions user
import User from '../Auth/Auth';
import LogoutButton from '../Logout/Logout';
import RaffleButtonSection from '../RaffleButtonSection/RaffleButtonSection';

export default function Header() {
  return (
    <div>
    <Grid item xs={12} style={{display:'flex',justifyContent:'end',margin:'10px 10px'}}>
      <User />
      <RaffleButtonSection />
      <LogoutButton />
    </Grid>
    <Divider style={{width:'90%',margin:'15px auto'}} />
    </div>
  )
}
