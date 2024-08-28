
import './TitleCards.css'
import { useEffect, useRef, useState } from 'react'


const TitleCards = ({ title, category })=> {
console.log(category,'category is showing');

    const cardsRef = useRef(null);
    const [apiData, setApiData] = useState([])
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWZmYWQ3N2M2M2NmMTU2N2E5YWU3MzE4NzJjYzEyYyIsIm5iZiI6MTcyNDg1NDYwMy43MjAyNzgsInN1YiI6IjY2YzliMjRmMzM4NDI5NzQxNTM4ODA5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.76aRTPSxoE3pSBCglTCMwT1Y1q9HPNxptLSjj7DoHH8'
        }
    };

    const handleWheel = (event: Event) => {

        event.preventDefault;
        cardsRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,options 
        
        )
            .then((response: Response) => response.json())
            .then((response: Response) => setApiData(response.results))
            .catch((err) => console.error(err)
            )
        cardsRef.current.addEventListener('wheel', handleWheel);
    }, [])
    return (
        <div className="title-cards">
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <div className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />

                        <p>{card.original_title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCards