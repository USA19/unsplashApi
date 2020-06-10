import axios from 'axios';



export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID Your_API_Key_Here'
    }
});
