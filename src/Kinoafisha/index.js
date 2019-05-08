// Core
import React, { useState } from 'react';

// Instruments
import './styles/main.css';
import { getStyles } from '../instruments';

export const Kinoafisha = () => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');

    const styles = getStyles({
        selectedFilter,
    });

    return (
        <>
            <div className = 'header'>
                <div className = 'logo' />
                <div className = 'filters'>
                    <div
                        className = { styles.latestFilter }
                        data-name = 'latest'
                        onClick = { (event) => setSelectedFilter(event.currentTarget.dataset.name)
                        }>
                        <span>Новинки 2019</span>
                    </div>
                </div>
            </div>
        </>
    );
};
