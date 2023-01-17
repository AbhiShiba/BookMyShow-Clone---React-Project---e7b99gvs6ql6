import React, { useEffect, useReducer, useState } from "react";
import "../styles/App.css";
import { Genres } from "./BookMyShow/Genres/Genres";
import { Movies } from "./BookMyShow/Movies/Movies";
import { NavBar } from "./BookMyShow/NavBar/NavBar";
import { TicketBooking } from "./BookMyShow/TicketBooking/TicketBooking";
import { apiUrl } from "./importent/api";
import { Overlay } from "./OverLay/Overlay";
import apicalls from "./utills/apicalls";
import { Validation } from "./Validation";
import { BrowserRouter, Routes, Route} from 'react-router'

export function Home() {

    const [apiData, setApiData] = useState(null);
  const [playNowList, setPlayNowList] = useState(null);
  const [stateUp, setStateUp] = useState({
    seatData: null,
    flag: false,
  });
  const [checkOverlay,setCheckOverlay] = useState(false);
  const [loginStatus,setLoginStatus] = useState(false)
  let loginChecking;

  useEffect(() => {
    const genresList = async () => {
      if (localStorage.getItem("genres") === null) {
        const getData = await apicalls(
          `${apiUrl.base}${apiUrl.getGenres}?api_key=${apiUrl.key}`
        );
        localStorage.setItem("genres", JSON.stringify(getData.data.genres));
        setApiData(getData.data.genres);
      } else {
        const currentData = localStorage.getItem("genres");
        setApiData(JSON.parse(currentData));
      }
    };
    genresList();

    const nowPlayingList = async () => {
      if (localStorage.getItem("movie") === null) {
        const getData = await apicalls(
          `${apiUrl.base}${apiUrl.nowPlaying}?api_key=${apiUrl.key}&page=1`
        );
        localStorage.setItem("movie", JSON.stringify(getData.data.results));
        setPlayNowList(getData.data.results);
      } else {
        const currentData = localStorage.getItem("movie");
        setPlayNowList(JSON.parse(currentData));
      }
    };
    nowPlayingList();
  }, []);

  loginChecking = loginStatus;

  const stateUpLift = (arg) => {
    setStateUp({
      stateUp : arg,
      flag : true
    })

    if(!loginStatus){
      setCheckOverlay(true);
    }
  }
  
  const checkForLoginStatus = () => {
    if(sessionStorage.getItem("login") !== null){
        const data = JSON.parse(sessionStorage.getItem("login"));
        setLoginStatus( data.status);
  } else{
    setLoginStatus(true);
  }
  }

  const overlayFlagCheck = () => {
    setCheckOverlay(false);
  }

  
  const loginFunction = () => {
    if(sessionStorage.getItem("login") !== null){
        const data = JSON.parse(sessionStorage.getItem("login"));
        setLoginStatus( data.status);
  }
  }
  useEffect(()=>{
    loginFunction()
  },[])
// sessionStorage.clear()
  return (
   <>
   <NavBar checkForLoginStatus={checkForLoginStatus} />
   { (loginStatus && stateUp.flag) ? <TicketBooking BookingData={stateUp} /> : <div className="genres-content">
         <Genres heading="Genres" apiData={apiData} />
         <Movies
           heading="Now Playing"
           imagePath={apiUrl.imageBase}
           apiData={playNowList}
           flagStatus = {stateUpLift}
         />
   </div>}
   {checkOverlay && <Overlay functionCall={overlayFlagCheck} ><Validation /></Overlay>}
   </>
  )
}
