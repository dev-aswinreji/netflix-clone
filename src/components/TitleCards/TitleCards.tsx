
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'
import { useEffect, useRef } from 'react'


const TitleCards = () =>{
const cardsRef = useRef(null);
const handleWheel= (event:Event) =>{

    event.preventDefault;
    cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handleWheel);
},[])
    return (
        <div className="title-cards">
            <h2>Popular on Netflix</h2>
            <div className="card-list" ref={cardsRef}>
                {card_data.map((card,index)=>{
                    return <div className="card" key={index}>
                        <img src={card.image} alt="" />
                        <p>{card.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCards