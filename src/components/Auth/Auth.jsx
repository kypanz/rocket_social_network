import { useMoralis } from "react-moralis";
import Button from '@mui/material/Button'

const User = () => {
    const { authenticate, isAuthenticated, user } = useMoralis();
  
    if (!isAuthenticated) {
      return (
        <div>
            <Button variant="contained" color="primary" onClick={() => authenticate()}>
              Connect Wallet
            </Button>
        </div>
      );
    }
  
    return (
      <div>
        <h3 style={{marginRight:'40px'}}>Hi <span style={{color:'lightcoral'}}> {user.get("username")} </span> </h3>
      </div>
    );
};

export default User;