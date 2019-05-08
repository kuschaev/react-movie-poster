// Core
import React from 'react';

// Instruments
import './styles/main.css';

export const Kinoafisha = () => {
    return (
        <>
            <div className = 'header'>
                <div className = 'logo' />
                <div className = 'filters'>
                    <div
                        className = 'latest'
                        data-name = 'latest'>
                        <span>Новинки 2019</span>
                    </div>
                </div>
            </div>
        </>
    );
};
