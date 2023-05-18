import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Cards from './components/Cards';
import PopularFilms from './components/PopularFilms';
import TrendFilms from './components/TrendFilms';
import VideoTrailers from './components/VideoTrailers';
import Footer from './components/Footer'
function App() {
  const[isPopular,setIsPopular] = useState(true);
  const [popState, setPopState] = useState([]);
  const [trendState, setTrendState] = useState([]);
  const [trailerState, setTrailerState] = useState([]);
  const [appState, setAppState] = useState([]);
  const [check,setCheck] = useState('day')
  const [isAlert,setisAlert] = useState(false)

  useEffect(()=>{
    const apiUrl = 'http://127.0.0.1:8000/api/popular';
    axios.get(apiUrl, function (req, res) {
      res.header("Access-Control-Allow-Origin", "*");
    }).then((resp) => {
      const allPersons = resp.data['results'];
      setPopState(allPersons);
      return
    });

    const apiUrlTrend = `http://127.0.0.1:8000/api/trend?dayweek=${check}`;
    axios.get(apiUrlTrend, function (req, res) {
      res.header("Access-Control-Allow-Origin", "*");
    }).then((resp) => {
      const allPersons = resp.data['results'];
      setTrendState(allPersons);
      return
    });
  const apiUrlTrailer = `http://127.0.0.1:8000/api/trailer?id=550`;
  axios.get(apiUrlTrailer, function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
  }).then((resp) => {
    const allPersons = resp.data['results'];
    setTrailerState(allPersons);
    return
  });  
    
  },[])



 const search = (text) =>{
  console.log(text);
  if(text.length>0){
    const apiUrl = `http://127.0.0.1:8000/api/kino?title=${text}`;
    axios.get(apiUrl, function (req, res) {
      res.header("Access-Control-Allow-Origin", "*");
    }).then((resp) => {
      const allPersons = resp.data['results'];
      if(resp.data['results'].length==0){
        // alert('No results!');
        setisAlert(true)
        setTimeout(()=>{setisAlert(false)},5000)
      }
      else{
        setAppState(allPersons);
      }
      return
    });
  }
 }
 const hidePopular = () => {
  setIsPopular(!isPopular)
 }
 const isCheck = (text) => {
    if(text == 'ok'){
      setCheck('week')
      const apiUrlTrend = `http://127.0.0.1:8000/api/trend?dayweek=week`;
      axios.get(apiUrlTrend, function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
      }).then((resp) => {
        const allPersons = resp.data['results'];
        setTrendState(allPersons);
        return
      });
    }
    else{
      setCheck('day')
      const apiUrlTrend = `http://127.0.0.1:8000/api/trend?dayweek=day`;
      axios.get(apiUrlTrend, function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
      }).then((resp) => {
        const allPersons = resp.data['results'];
        setTrendState(allPersons);
        return
      });
    }
 }
  return (
    <div className="App">
       {isAlert &&
       <div class="alert alert-danger" role="alert">
        <h3>No results...</h3>
        </div>
      }
      <Header></Header>
      <Search setIsPopular={hidePopular} search={search}></Search>
      <PopularFilms data={popState}></PopularFilms>
      <VideoTrailers data={trailerState}></VideoTrailers>
      {isPopular != true && <Cards data={appState} />}
      <TrendFilms isCheck={isCheck} data={trendState}></TrendFilms>
      <Footer></Footer>
    </div>
  );
}

export default App;
