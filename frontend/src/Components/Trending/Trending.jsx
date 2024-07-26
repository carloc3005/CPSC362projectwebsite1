import React, { useState, useEffect } from 'react';
import './Trending.css';
import data_product from '../Assets/data';
import Knife from '../Knife/Knife';

export const Trending = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [featuredItems, setFeaturedItems] = useState([]);

    const itemsPerPage = 36; // Defines the number of items displayed per page
    const featuredCount = 4; // Total number of featured items

    // Hook to setup featured items once on component mount
    useEffect(() => {
        const shuffledProducts = [...data_product].sort(() => Math.random() - 0.5);
        const selectedItems = shuffledProducts.slice(0, featuredCount);
        setFeaturedItems(selectedItems);
    }, []);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentDisplayItems = data_product.slice(firstIndex, lastIndex);
    const totalPageCount = Math.ceil(data_product.length / itemsPerPage);

    const handlePageChange = (newPage) => setCurrentPage(newPage);

    const goToNextPage = () => setCurrentPage(prev => (prev < totalPageCount ? prev + 1 : prev));
    const goToPreviousPage = () => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));

    return (
        <div className='trending'>
            <h1>Top Picks</h1>
            <div className='trending-items'>
                {featuredItems.map(item => (
                    <Knife key={item.id} {...item} />
                ))}
            </div>

            <h1>More Items</h1>
            <div className='pagination-items'>
                {currentDisplayItems.map(item => (
                    <Knife key={item.id} {...item} />
                ))}
            </div>

            <div className='pagination'>
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>Prev</button>
                {[...Array(totalPageCount).keys()].map(num => (
                    <button key={num + 1} onClick={() => handlePageChange(num + 1)}
                            className={currentPage === num + 1 ? 'active' : ''}>
                        {num + 1}
                    </button>
                ))}
                <button onClick={goToNextPage} disabled={currentPage === totalPageCount}>Next</button>
            </div>
        </div>
    );
}

export default Trending;

