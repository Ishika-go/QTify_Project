import axios from 'axios';
export const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

// console.log(apiData.data);

export async function fetchTopAlbumData (){
    try{
   const apiData = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
   console.log(apiData);
   console.log(apiData.data);
   return apiData.data;
    }
    catch(error){
        console.log(error);
        // return error;
    }
}