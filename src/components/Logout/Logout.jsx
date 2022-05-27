import { useMoralis } from "react-moralis";
import Button from '@mui/material/Button';

const LogoutButton = () => {
    const { logout, isAuthenticating, isAuthenticated } = useMoralis();
    const renderOut = () => {
        if(!isAuthenticated) return;
        return(
            <Button variant="contained" color="primary" onClick={() => logout()} style={{height:'40px',marginTop:'10px'}}>
                Logout
            </Button>
        )
    }   

    return (
        <>
        {renderOut()}
        </>
    )
};

export default LogoutButton;