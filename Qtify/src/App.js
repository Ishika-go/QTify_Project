// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Heroimage from "./components/Heroimage/Heroimage";
import Section from"./components/Section/Section";
import { useEffect,useState } from "react";
import {fetchTopAlbumData} from "./API/API";
// import Card from "./components/Card/Card";
function App() {
  const [topAlbumData,setTopAlbumData] = useState([]);

console.log(topAlbumData);
const generateTopAlbums = async()=>{
  try{
    const d = await fetchTopAlbumData();
    // console.log(d);
    setTopAlbumData(d);

  }
  catch(e){
    console.log(e);

  }

}   

useEffect(()=>{

  generateTopAlbums();

},[]);    //here com

  return (
   
    <div>
<Navbar />
<Heroimage />
{/* {
topAlbumData.map((topAlbum)=>(
  <Card data ={topAlbum} type="album" key={topAlbum.id} />
))} */}
<Section data={topAlbumData} title="Top Albums" type="album" />
    </div>
  );
}

export default App;
