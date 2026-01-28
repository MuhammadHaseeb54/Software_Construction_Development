// componet code 
import React from 'react';
import Header from './components/Section1';
import ProfileSection from './components/Section2';
import ServicesSection from './components/Section3';
import { FaTools, FaPlus, FaCog } from "react-icons/fa";
const cards = [
    {
        icon: FaTools,
        title: "Web Development",
        description: "I build modern web applications using React, Next.js, and more.",
        extra: "Frontend & Backend"
    },
    {
        icon: FaPlus,
        title: "UI/UX Design",
        description: "Designing beautiful and user-friendly interfaces for your projects.",
        extra: "Figma, Adobe XD"
    },
    {
        icon: FaCog,
        title: "Automation",
        description: "Automate your workflow and business processes with custom solutions.",
        extra: "Python, Node.js"

    }
];
function Page() {
    return (
        <div className='bg-[#0a0e2a] text-white h-screen'>
            <Header />                                      
            <ProfileSection />
            <div className='mt-[20px]'>
                <p></p>
            </div>
            <ServicesSection cards={cards} />
        </div>
    );
}
export default Page;
