import {React , useState, useEffect} from 'react'
import Cards from './Cards';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

// Axios for example data
import axios from 'axios';

export default function Posts() {

  const [tempPosts, setTempPosts] = useState([]);

  const gettinFakeData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    let tempData = [];
    const data = response.data;
    for(let i =0; i < response.data.length; i++){
        tempData.push({
            author_id : `${data[i].id}`,
            author_name : `${data[i].name}`,
            message : `${data[i].company.catchPhrase}`,
            likes : i+5
        })
    }
    setTempPosts(tempData);
  }

  const renderPosts = () => {
      return tempPosts.map((cont,index)=>{
          return(
            <Cards author_id={cont.author_id} author_name={cont.author_name} message={cont.message} likes={cont.likes} />
          )
      })
  }

  useEffect(() => {
    gettinFakeData();
  },[]);

  return (
    <div>
        <Container maxWidth="sm" style={{marginTop:'10px'}} >
        {renderPosts()}
        </Container>
    </div>
  )
}
