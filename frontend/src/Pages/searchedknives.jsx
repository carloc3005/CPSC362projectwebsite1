import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import all_knives from '../Components/Assets/all_knifes';
import './CSS/searchedknives.css';

const SearchedKnives = () => {
    const [filteredKnives, setFilteredKnives] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    useEffect(() => {
        if (query) {
            const filtered = all_knives.filter(knife =>
                knife.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredKnives(filtered);
        }
    }, [query]);

    return (
        <div className="searched-knives">
            <h2>Search Results for: {query}</h2>
            {filteredKnives.length > 0 ? (
                <div className="knife-grid">
                    {filteredKnives.map(knife => (
                        <div key={knife.id} className="knife-card">
                            <img src={knife.image} alt={knife.name} />
                            <h3>{knife.name}</h3>
                            <p>Price: ${knife.knife_price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchedKnives;
