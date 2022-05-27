import { useWeb3Contract } from 'react-moralis';
import { Button } from '@mui/material';
import web3Info from '../../interaction/web3Info';

const GetMyInfo = () => {
    const { data, error, runContractFunction, isFetching, isLoading } =
      useWeb3Contract({
        abi: web3Info.abi,
        contractAddress: web3Info.contract,
        functionName: "getMyInfo",
        params: {
          //secondsAgos: [0, 10],
        },
    });

    
    console.log(error);
    
    /*
    _myOwnRafflesId: [BigNumber]
    _myRafflesId: []
    _myTickets: []
    */

    const renderMyRafflesOwn = () => {
      return data._myOwnRafflesId.map((cont,index)=>{
        return(
          <>
            <p key={index}> {parseInt(cont,16)} </p>
          </>
        )
      });
    }

    const renderMyRaffles = () => {
      if(data._myOwnRafflesId.length == 0) return <p> You dont create a raffle yet </p>
      if(data._myRafflesId.length == 0) return <p> Dont participate in raffles yet </p>
      return data._myRafflesId.map((cont,index)=>{
        return(
          <>
            <p key={index}> {parseInt(cont,16)} </p>
          </>
        )
      });
    }

    const renderMyRafflesTickets = () => {
      if(data._myTickets.length == 0) return <p> Dont have tickets yet </p>
      return data._myTickets.map((cont,index)=>{
        return(
          <>
            <p key={index}> {parseInt(cont,16)} </p>
          </>
        )
      });
    }

    const renderMyInfo = () => {
      console.log(data);
      return(
        <>
        <p style={{padding:'10px',background:'#ebebeb'}}> My raffles Created (Ids) : {renderMyRafflesOwn()} </p>
        <p style={{padding:'10px',background:'#ebebeb'}}> Participating in (Ids) : {renderMyRaffles()} </p>
        <p style={{padding:'10px',background:'#ebebeb'}}> My Tickets (Nº) : {renderMyRafflesTickets()} </p>
        </>
      )
    }
  
    return (
      <div>
        <Button variant="contained" color="primary" onClick={() => runContractFunction()} disabled={isFetching}>
            View
        </Button>
        {data && renderMyInfo()}
      </div>
    );
};

export default GetMyInfo;