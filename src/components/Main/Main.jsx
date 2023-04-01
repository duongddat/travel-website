import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
//icon
import {HiOutlineLocationMarker, HiClipboardCheck} from 'react-icons/hi';

import './main.scss';
//img
import img1 from '../../assets/img1.jpg';

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurios stays and adventurous activities.'
    },
    {
        id: 2,
        imgSrc: img1,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called lost City of Incas. This place is popular among tourists as the sunrise from the Sun Fate is simply spectacular.'
    },
    {
        id: 3,
        imgSrc: img1,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One of the most remarkable Australia natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place.'
    },
    {
        id: 4,
        imgSrc: img1,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious atyas and adventurous activities.'
    },
    {
        id: 5,
        imgSrc: img1,
        destTitle: 'Cuanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'A city in central Mexico, Guanajuato is know for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors availbale. Always welcome.'
    },
    {
        id: 6,
        imgSrc: img1,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food.'
    },
    {
        id: 7,
        imgSrc: img1,
        destTitle: 'Ankor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurios stays and adventurous activities.'
    },
    {
        id: 8,
        imgSrc: img1,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurios stays and adventurous activities.'
    },
    {
        id: 9,
        imgSrc: img1,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurios stays and adventurous activities.'
    },
]

const Main = () => {
    //Creat a react hook to add a scroll animation
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
       <section className='main container section'>
            <div className='secTitle'>
                <h3 data-aos="fade-right" className='title'>
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                            return (
                                <div key={id} data-aos="fade-up" className='singleDestination'>
                                    <div className="imageDiv">
                                        <img src={imgSrc} alt={destTitle}/>
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className='destTitle'>
                                            {destTitle}
                                        </h4>
                                        <span className='continent flex'>
                                            <HiOutlineLocationMarker className='icon'/>
                                            <span className='name'>{location}</span>
                                        </span>

                                        <div className="fees flex">
                                            <div className="grade">
                                                <span>
                                                    {grade}
                                                    <small>+1</small>
                                                </span>
                                            </div>
                                            <div className='price'>
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>
                                        <div className='desc'>
                                            <p>{description}</p>
                                        </div>
                                        <button className='btn flex'>
                                            DETAILS
                                            <HiClipboardCheck className='icon'/>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
       </section>
    )
}

export default Main;