
import './Player.css'
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Player = () => {
    const {id} = useParams();
    const [apiData, setApiData] = useState({

        name: "",
        key: "",
        published_at: "",
        typeof: "",
    }
    )

    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWZmYWQ3N2M2M2NmMTU2N2E5YWU3MzE4NzJjYzEyYyIsIm5iZiI6MTcyNDg1NDYwMy43MjAyNzgsInN1YiI6IjY2YzliMjRmMzM4NDI5NzQxNTM4ODA5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.76aRTPSxoE3pSBCglTCMwT1Y1q9HPNxptLSjj7DoHH8'
        }
    };

    useEffect(() => {

        fetch(url, options)
            .then(res => res.json())
            .then(res => setApiData(res.results[0]))
            .catch(err => console.error('error:' + err));

    }, [])

    return (
        <div className="player">
            <img src={back_arrow_icon} alt="" />
            <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
                title='trailer' frameBorder='0' allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.typeof}</p>
            </div>
        </div>
    )
}

export default Player