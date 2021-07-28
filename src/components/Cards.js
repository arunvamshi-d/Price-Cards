import React from 'react'
import Card from './Card'

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Beginner',
        image: image1,
        text: 'Unlimited access to Yoga classes',
        text1: '24/7 Gym access',
        text2: 'Use of locker & showers',
        price: 'Subscribe @ $100/Month'
    },
    {
        id: 2,
        title: 'Pro',
        image: image2,
        text: 'Unlimited access to Yoga classes',
        text1: '24/7 Gym access',
        text2: 'Use of locker & shower',
        text3: 'Weekday Pool access',
        price: 'Subscribe @ $125/Month'
    },
    {
        id: 3,
        title: 'VIP',
        image: image3,
        text: 'Unlimited access to Yoga classes',
        text1: '24/7 Gym access',
        text2: 'Use of locker & shower',
        text3: 'Access to Pool 7 days a week',
        text4: '12% off on all store products',
        text5: 'Free gym T-Shirt',
        price: 'Subscribe @ $150/Month'
    },
]

function Cards() {
    console.log(cards)
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
               {
                   cards.map(card => (
                       <div className="col-md-4" key={card.id}>
                           <Card title={card.title} imageSource={card.image} text={card.text} text1={card.text1} text2={card.text2} text3={card.text3} text4={card.text4} text5={card.text5} price={card.price}/>
                        </div>
                   ))
               }
            </div>
        </div>
    )
}

export default Cards
