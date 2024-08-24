
import { useState, useEffect } from "react"
import axios from "axios"
import { Movies } from "./components/Movies";
import { Endpoints } from "./interface/endpoints";

const URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY

const endpoints: Endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
}

const title: string = "JUST PLAY IT"
export default function App() {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {

    

    axios.
      get(`${URL}${endpoints.originals}`, {
        params: {
          api_key: API_KEY
        },
      })
      .then((res) => setOriginals(res.data.results));
    console.log(originals, 'originasl is showing');

 axios.
      get(`${URL}${endpoints.now_playing}`, {
        params: {
          api_key: API_KEY
        },
      })
      .then((res) => setNowPlaying(res.data.results));
    console.log(nowPlaying, 'originasl is showing');
  }, [])


  return (
    <>

      {originals.length < 1 ? <button type="button" className="bg-indigo-500 ..." disabled>
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Processing...
      </button> :
        <Movies title={title} movies={originals} moviesS={nowPlaying} />}
    </>
  )
}  
