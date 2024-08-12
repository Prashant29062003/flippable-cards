import { useState } from 'react';
import React from 'react'
import FlippableCard from '../Cards/FlippabeCard';

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

 

function carousel() {

  const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
      );
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
      );
    };

  return (

    <>

      <div className="relative overflow-hidden">
        
      <div className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cardData.map((card, index) => (
          <FlippableCard
          key={index}
          question={card.question}
          options={card.options}
          answer={card.answer}
        />
        ))}
      </div>

    {/* Navigation Buttons */}
    <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
        onClick={prevSlide}
        aria-label="Previous card"
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
        onClick={nextSlide}
        aria-label="Next card"
      >
        &gt;
      </button>
      </div>
    </>


      
  )
}

export default carousel