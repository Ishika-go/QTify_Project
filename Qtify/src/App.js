// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Heroimage from "./components/Heroimage/Heroimage";
import Section from"./components/Section/Section";
import React,{ useEffect,useState } from "react";
import {fetchTopAlbumData,fetchNewAlbums,fetchAllSongs} from "./API/API";

// import Card from "./components/Card/Card";
function App() {
  const [topAlbumData,setTopAlbumData] = useState([]);
  const [newAlbumData,setNewAlbumData] = useState([]);
  const[songsData,setSongsData] =  useState([]);
  // const[toggle,setToggle] = useState(false);
  const[value,setValue]  = useState(0);
  const[filteredDataValues,setFilteredDataValues]=useState([]);


  // const handleToggle =()=>{
  //   setToggle(!toggle);
  // };

  const handleChange=(event,newVal)=>{
    setValue(newVal);
  }
// console.log(topAlbumData);
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

const generateAllSongsData=async()=>{
  try{
    const songss = await fetchAllSongs();
    // console.log(d);
    setSongsData(songss);
    setFilteredDataValues(songss)

  }
  catch(e){
    console.log(e);

  }
}

const filteredData =(val)=>{
  setFilteredDataValues(val);
}

useEffect(()=>{

  generateTopAlbums();
  generateNewAlbums();
  generateAllSongsData();
},[]);    //here com

  return (
   
    <div>
<Navbar />
<Heroimage />
{/* {
topAlbumData.map((topAlbum)=>(
  <Card data ={topAlbum} type="album" key={topAlbum.id} />
))} */}
<Section data={topAlbumData} title="Top Albums" type="album" filteredDataValues={topAlbumData}  />
{/* <div
  style={{
    background: 'var(--color-primary)',
    height: '1px',
  }}
/> */}


<Section data={newAlbumData} title="New Albums" type="album" filteredDataValues={newAlbumData}  />

<Section 
data= {songsData}
type = "song"
title = "Songs"
filteredData={filteredData}
filteredDataValues={filteredDataValues}
value = {value}
handleChange = {handleChange}
/>
    </div>
  );
}

export default App;
