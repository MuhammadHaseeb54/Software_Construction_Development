import React from 'react';
import Mycart from './Mycart';

const ServicesSection = ({ cards }) => (
  <div className="bg-[#0a0e2a] text-white w-full px-10 py-10">
    <h2 className="text-2xl font-bold mb-2">Services I Offer</h2>
    <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
      {cards.map((card, idx) => (
        <Mycart key={idx} {...card} />
      ))}
    </div>
  </div>
);

export default ServicesSection;