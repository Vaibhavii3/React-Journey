import React from 'react';

const GalleryFilters = ({ onFilterChange}) => {
    const categories = ['All', 'Nature', 'Animals', 'City'];

    return (
        <div style={styles.filterContainer}>
            {categories.map((category) =>(
                <button key={category} style={styles.button} onClick={() => onFilterChange(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

const styles = {
    filterContainer: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    button: {
        margin: '0 10px',
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: '#fff',
        cursor: 'pointer',
        borderRadius: '5px',
        fontSize: '16px',
    },
};

export default GalleryFilters;