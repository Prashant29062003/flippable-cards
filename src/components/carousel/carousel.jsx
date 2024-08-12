import React from 'react'
import Slider from 'react-slick';
import {FlippableCard} from "./Cards/FlippableCard";

const cardData = [
    {
      question: 'What does CPU stand for?',
      options: ['Central Processing Unit', 'Central Programming Unit', 'Computer Personal Unit'],
      answer: 'CPU stands for Central Processing Unit. It is the primary component of a computer that performs most of the processing inside the computer.',
    },
    {
      question: 'What is RAM?',
      options: ['Random Access Memory', 'Read Access Memory', 'Rapid Access Memory'],
      answer: 'RAM stands for Random Access Memory. It is a type of computer memory that can be accessed randomly and is used to store data temporarily while a computer is running.',
    },
    // Add more cards as needed
  ];

function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
      {cardData.map((card, index) => (
        <FlippableCard
          key={index}
          question={card.question}
          options={card.options}
          answer={card.answer}
        />
      ))}
    </Slider>

  )
}

export default Carousel