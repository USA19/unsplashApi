import axios from 'axios';



export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID jTWuTfMD7BCCPqac3irolXlvAmPpMm_smJ4fcNaMhGg'
    }
});