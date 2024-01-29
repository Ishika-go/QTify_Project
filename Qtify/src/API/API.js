import axios from 'axios';
export const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

// console.log(apiData.data);

export async function fetchTopAlbumData (){
    try{
   const apiData = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
//    console.log(apiData);
//    console.log(apiData.data);
   return apiData.data;
    }
    catch(error){
        console.log(error);
        // return error;
    }
}
export const fetchNewAlbums=async ()=>{
    try{
        const response = await axios.get(BACKEND_ENDPOINT+"/albums/new");
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const fetchAllSongs=async()=>{
    try{
        const r = await axios.get(BACKEND_ENDPOINT+"/songs");
        return r.data;

    }

    catch(error){
    console.log(error);
    }
}