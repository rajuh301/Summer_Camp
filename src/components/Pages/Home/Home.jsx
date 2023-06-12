import React from 'react';
import Carusol from './Carusol';
import PopularSection from './PopularSection';
import ExtraSection from './ExtraSection';
import PopularInstructors from './PopularInstructors';

const Home = () => {
    return (
        <div>
            <Carusol></Carusol>
            <PopularSection></PopularSection>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;