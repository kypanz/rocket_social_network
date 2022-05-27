import {React, useState} from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Divider } from '@mui/material'
import NoConnected from '../NoConnected/NoConnected';

// Functions to interact
import GetMyInfo from '../GetMyInfo/GetMyInfo';
import CreateRaffle from './CreateRaffleButton/CreateRaffleButton';
import SearchRaffleId from './SearchRaffleId/SearchRaffleId';
import LastRaffles from './LastRaffles/LastRaffles';

// Moralis
import { useMoralis } from "react-moralis";


export default function Raffle() {

  const { isAuthenticated } = useMoralis();

  // This are variables for the raffle creation
  const [nameRaffle,setNameRaffle] = useState('');
  const [rewardAmount, setRewardAmount] = useState(0);
  const [priceTicket, setPriceTicket] = useState(0);
  const [maxTickets, setMaxTickets] = useState(0);
  const [days, setDays] = useState(0);

  // This is for raffle search
  const [idRaffleSearch, setIdRaffleSearch] = useState(0);

  const handleInput = (e) => {
    switch(e.target.name){
      case '_nameRaffle':
        setNameRaffle(e.target.value);
        break;
      case '_rewardAmount':
        setRewardAmount(e.target.value);
        break;
      case '_priceTicket':
        setPriceTicket(e.target.value);
        break;
      case '_maxTickets':
        setMaxTickets(e.target.value);
        break;
      case '_days':
        setDays(e.target.value);
        break;
    }
  }

  const rednerIfIsConnected = () => {
    return(
      <>
      <p>Welcome to the raffle system <span style={{color:'green'}}> This section is working ! </span> </p>
        <LastRaffles/>
        <Container maxWidth="xl" style={{background:'transparent',marginTop:'15px'}}>
          <Grid container item xs={5} style={{
            background:'white',
            float:'right',
            display:'block',
            padding:'30px',
            minHeight:'300px',
            borderRadius:'5px',
            marginBottom:'35px'}}>
            <Divider style={{marginTop:'20px'}} />
            <h2>Create a raffle</h2>
            <Grid container item xs={12}>
            <TextField
              id="_nameRaffle"
              name="_nameRaffle"
              label="_nameRaffle"
              value={nameRaffle}
              onChange={(e)=> handleInput(e)}
            />
            <TextField
              id="_rewardAmount"
              name="_rewardAmount"
              label="_rewardAmount"
              value={rewardAmount}
              onChange={(e)=> handleInput(e)}
            />
            <TextField
              id="_priceTicket"
              name="_priceTicket"
              label="_priceTicket"
              value={priceTicket}
              onChange={(e)=> handleInput(e)}
            />
            <TextField
              id="_maxTickets"
              name="_maxTickets"
              label="_maxTickets"
              value={maxTickets}
              onChange={(e)=> handleInput(e)}
            />
            <TextField
              id="_days"
              name="_days"
              label="_days"
              value={days}
              onChange={(e)=> handleInput(e)}
            />
            </Grid>
            <CreateRaffle name={nameRaffle} reward={rewardAmount} priceTicket={priceTicket} maxTickets={maxTickets} days={days} />
          </Grid>
          <Grid container item xs={6} style={{background:'white',display:'block',textAlign:'left',padding:'30px',minHeight:'300px',borderRadius:'5px'}}>
            <Grid container item xs={12} style={{background:'white',display:'block',margin:'auto',padding:'5px',paddingBottom:'20px'}}>
              <h2>Search for raffle</h2>
              <TextField
                id="raffle_id"
                label="Enter raffle id"
                value={idRaffleSearch}
                onChange={(e) => setIdRaffleSearch(e.target.value)}
              />
              <SearchRaffleId raffleId={idRaffleSearch} />
            </Grid>
            <Divider />
            <h2>My raffles</h2>
            <GetMyInfo />
          </Grid>
        </Container>
        </>
    )
  }

  return (
    <div>
        {(isAuthenticated) ? rednerIfIsConnected() : <NoConnected />}
    </div>
  )
}
