// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Heroimage from "./components/Heroimage/Heroimage";
import Section from"./components/Section/Section";
import { useEffect,useState } from "react";
import {fetchTopAlbumData,fetchNewAlbums} from "./API/API";
// import Card from "./components/Card/Card";
function App() {
  const [topAlbumData,setTopAlbumData] = useState([]);
  const [newAlbumData,setNewAlbumData] = useState([]);


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

const generateNewAlbums = async()=>{
  try{
    const newAl = await fetchNewAlbums();
    // console.log(d);
    setNewAlbumData(newAl);

  }
  catch(e){
    console.log(e);

  }

}  

useEffect(()=>{

  generateTopAlbums();
  generateNewAlbums();

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
{/* <div
  style={{
    background: 'var(--color-primary)',
    height: '1px',
  }}
/> */}


<Section data={newAlbumData} title="New Albums" type="album" />
    </div>
  );
}

export default App;
