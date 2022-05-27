import React from 'react'
import { useMoralis } from "react-moralis";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function RaffleButtonSection() {
    const { logout, isAuthenticating, isAuthenticated } = useMoralis();
    const [actualPath, setActualPath] = React.useState(window.location.pathname);

    const oposite = () => {
        if(actualPath == '/raffle') {
            setActualPath('/')
        } else {
            setActualPath('/raffle')
        }
    }
    
    const renderOut = () => {
        if(!isAuthenticated) return;
        return(
            <Link to={(actualPath == '/raffle' ? '/' : 'raffle')} style={{textDecoration:'none'}}>
            <Button variant="outlined" color="primary" onClick={oposite} style={{height:'40px',marginTop:'10px',marginRight:'5px'}}>
                {(actualPath == '/raffle') ? 'Home' : 'Raffle'}
            </Button>
            </Link>
        )
    }   

    return (
        <>
        {renderOut()}
        </>
    )
}
