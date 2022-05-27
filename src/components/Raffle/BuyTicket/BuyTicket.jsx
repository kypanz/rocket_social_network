import { Button } from '@mui/material';
import { useWeb3Contract, useMoralis } from 'react-moralis';
import web3Info from '../../../interaction/web3Info';

const BuyTicket = ({ raffleId, priceTicket}) => {
    raffleId = parseInt(raffleId);
    priceTicket = parseInt(priceTicket);

    console.log('PRICE TICKET =>> ',priceTicket);

    const { data, error, runContractFunction, isFetching, isLoading } =
      useWeb3Contract({
        abi: web3Info.abi,
        contractAddress: web3Info.contract,
        functionName: "buyTicket",
        params: {
            _idRaffle: raffleId
        },
        msgValue: (10 ** 18) * (priceTicket)
    });

    console.log(error);
    
    return (
      <div>
        <Button variant="contained" color="primary" style={{marginTop:'15px'}} onClick={() => runContractFunction()} disabled={isFetching} >
            Buy One ticket
        </Button>
        {data && <pre>{JSON.stringify(data)}</pre>}
        {error && <p style={{background:'red',padding:'15px',color:'white'}}> {error.reason} </p>}
      </div>
    );
};

export default BuyTicket;