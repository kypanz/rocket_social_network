import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useWeb3Contract, useMoralis } from 'react-moralis';
import web3Info from '../../../interaction/web3Info';

const LastRaffles = () => {

    const [raffles,setRaffles] = useState([]);
    const [lastRaffleId, setLastRaffleId] = useState(null);

    const { data, error, runContractFunction, isFetching, isLoading } =
      useWeb3Contract({
        abi: web3Info.abi,
        contractAddress: web3Info.contract,
        functionName: "getRaffles",
        params: {
            //_idRaffle: raffleId
        },
        //msgValue: (10 ** 18) * (priceTicket)
    });

    console.log(error);

    useEffect(()=>{
        if(data != null) setLastRaffleId(parseInt(data._hex,16));
    },[data]);

    const renderLastRaffles = () => {
        /*
            Tasks:
            compare if the actual raffle is more than 5
            if is less return the lastest 5
                => example => 15 - 5 = 10 , index 10 to i++ = 5 in a for
                => example => 6 - 5 = 1 , index 1 to i++ = 5 in a for, the lastest 5 excluding the 1 index
        */
       return <p>Raffles Created : <span style={{fontSize:'25px',color:'blue'}}> {lastRaffleId - 1} </span></p>
    }
    
    return (
      <div style={{background:'transparent',padding:'5px'}}>
        <p> how many raffle the community has created ? </p>
        <Button variant="contained" color="primary" style={{marginTop:'15px'}} onClick={() => runContractFunction()} disabled={isFetching} >
            View
        </Button>
        {data && renderLastRaffles()}
      </div>
    );
};

export default LastRaffles;