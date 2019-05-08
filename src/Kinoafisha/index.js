// Core
import React, { useState } from 'react';

// Instruments
import './styles/main.css';

export const Kinoafisha = () => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');

    return (
        <>
            <div className = 'header'>
                <div className = 'logo' />
                <div className = 'filters'>
                    <div
                        className = 'latest'
                        data-name = 'latest'
                        onClick = { (event) => console.log(event.currentTarget.dataset.name)
                        }>
                        <span>Новинки 2019</span>
                    </div>
                </div>
            </div>
        </>
    );
};
