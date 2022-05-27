import React from 'react';
import { Button, Grid, Container } from '@mui/material';
import { useWeb3Contract, useMoralis } from 'react-moralis';
import web3Info from '../../../interaction/web3Info';

// Interaction
import BuyTicket from '../BuyTicket/BuyTicket';

/*
    Tasks:
        merge the two view functions => 
        - getRaffleByIdPartOne
        - getRaffleByIdPartTwo
*/

/*

    PART ONE =>

    maxTickets: BigNumber {_hex: '0x14', _isBigNumber: true}
    nameOfRaffle: "Kypanz testing"
    ownerOfRaffle: "0x6131134F83D4bbfF03e86F40f64f6BA3c7D5Bb68"
    priceTicket: BigNumber {_hex: '0x01', _isBigNumber: true}
    rewardAmount: BigNumber {_hex: '0x0a', _isBigNumber: true}
    statusRewarded: false
    winner: "0x0000000000000000000000000000000000000000"


    PART TWO =>

    counterTickets: BigNumber {_hex: '0x00', _isBigNumber: true}
    initialDate: BigNumber {_hex: '0x62915d75', _isBigNumber: true}
    status: 0
    x_days: BigNumber {_hex: '0x02', _isBigNumber: true}
    _participants: []
    _tickets: []

    // STATUS 
    { InProgress, Finished, Closed } | 0, 1 , 2

*/

const SearchRaffleId = ({ raffleId }) => {

    raffleId = parseInt(raffleId);
    const [priceTicket,setPriceTicket] = React.useState(0);

    // First Part
    const { data, error, runContractFunction, isFetching, isLoading } =
        useWeb3Contract({
        abi: web3Info.abi,
        contractAddress: web3Info.contract,
        functionName: "getRaffleByIdPartOne",
        params: {
            _id: raffleId
        }
    });

    // Second Part
    const resultSecond =
      useWeb3Contract({
        abi: web3Info.abi,
        contractAddress: web3Info.contract,
        functionName: "getRaffleByIdPartTwo",
        params: {
            _id: raffleId
        }
    });

    const runSecondPart = resultSecond.runContractFunction;
    const dataSecondPart = resultSecond.data;

    console.log(error);

    const renderStatus = (number) => {
        switch(number){
            case 0:
                return 'In progress'
            case 1:
                return 'Finished'
            case 2:
                return 'Closed'
        }
    }

    const renderData = () => {
        return (
            <>
                <p> ownerOfRaffle : {data.ownerOfRaffle} </p>
                <p> nameOfRaffle : {data.nameOfRaffle} </p>
                <p> winner : {(data.winner == '0x0000000000000000000000000000000000000000') ? 'No winner yet' : data.winner} </p>
                <p> rewardAmount : {parseInt(data.rewardAmount._hex,16)} </p>
                <p> statusRewarded : {( isNaN( parseInt(data.statusRewarded._hex,16) ) ) ? 'Not Rewarded yet' : parseInt(data.statusRewarded._hex,16) } </p>
            </>
        )
    }

    const renderSecondPart = () => {
        const _date = new Date( parseInt(dataSecondPart.initialDate._hex,16) );
        return(
            <>
                <p> Ticket Selled : {parseInt(dataSecondPart.counterTickets._hex,16)} </p>
                <p> Start Date : {_date.toString()} </p>
                <p> Days to finish : { parseInt(dataSecondPart.x_days._hex,16) } </p>
                <p> Status : {renderStatus(dataSecondPart.status)} </p>
            </>
        )
    }

    const run = () => {
        runContractFunction();
        runSecondPart();
    }

    React.useEffect(()=>{
        if(data != null){
            if(data.priceTicket != 'undefined') setPriceTicket(parseInt(data.priceTicket._hex,16));
        }
    },[data]);

    return (
      <div>
        <Button variant="contained" color="primary" style={{marginTop:'15px'}} onClick={() => run()} disabled={isFetching} >
            Search
        </Button>
        <Container maxWidth="xl" style={{background:'#ebebeb',padding:'5px',marginTop:'15px'}}>
        {data && renderData()}
        {dataSecondPart && renderSecondPart()}
        {dataSecondPart && <BuyTicket raffleId={raffleId} priceTicket={priceTicket} />}
        </Container>

      </div>
    );
};

export default SearchRaffleId;