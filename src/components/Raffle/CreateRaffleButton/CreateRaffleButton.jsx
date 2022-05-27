import { Button } from '@mui/material';
import { useWeb3Contract, useMoralis } from 'react-moralis';
import web3Info from '../../../interaction/web3Info';

/*
0: "_nameRaffle is required"
1: "_rewardAmount is required"
2: "_priceTicket is required"
3: "_maxTickets is required"
4: "_days is required"
*/

const CreateRaffle = ({ name, reward, priceTicket, maxTickets, days }) => {
    const { Units } = useMoralis();
    reward = parseInt(reward);
    priceTicket = parseInt(priceTicket); 
    maxTickets = parseInt(maxTickets);
    days = parseInt(days);
    
    const { data, error, runContractFunction, isFetching, isLoading } =
      useWeb3Contract({
        abi: web3Info.abi,
        contractAddress: web3Info.contract,
        functionName: "createRaffle",
        params: {
            _nameRaffle: name,
            _rewardAmount: reward,
            _priceTicket: priceTicket,
            _maxTickets: maxTickets,
            _days: days,
        },
        msgValue: (10 ** 18) * (reward + 2)
    });

    console.log(error);
    
    return (
      <div>
        <Button variant="contained" color="primary" style={{marginTop:'15px'}} onClick={() => runContractFunction()} disabled={isFetching} >
            Create
        </Button>
        {data && <pre>{JSON.stringify(data)}</pre>}
        {error && <p style={{background:'red',padding:'15px',color:'white'}}> {error.reason} </p>}
      </div>
    );
};

export default CreateRaffle;