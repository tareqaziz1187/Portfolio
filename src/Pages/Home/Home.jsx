import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Education from '../Education/EducationAndCourses';
import EducationAndCourses from '../Education/EducationAndCourses';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <EducationAndCourses></EducationAndCourses>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;