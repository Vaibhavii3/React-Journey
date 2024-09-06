import React, { useState } from 'react';
import GalleryFilters from './GalleryFilters';
import ImageList from './ImageList';

const ImageGallery = () => {
    const images = [
        { 
            id: 1, 
            url: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            category: 'Nature' 
        },
        
        {
            id: 2, 
            url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            category: 'Nature' 
        },

        { 
            id: 3, 
            url: 'https://images.unsplash.com/photo-1480554840075-72cbdabbf689?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            category: 'Animals' 
        },

        { 
            id: 4, 
            url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            category: 'City' 
        },

        { 
            id: 5, 
            url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            category: 'Nature' 
        },

        { 
            id: 6, 
            url: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            category: 'Animals' 
        },

        { 
            id: 7, 
            url: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            category: 'City' 
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredImages = selectedCategory === 'All' ? images : images.filter((image) => image.category === selectedCategory);

    return (
        <div style={StyleSheet.galleryContainer}>
            <h1 style={StyleSheet.header}> Image Gallery with Filter </h1>
            <GalleryFilters onFilterChange={handleFilterChange} />
            <ImageList image={filteredImages} />
        </div>
    );
};

const styles = {
    galleryContainer: {
        width: '80%',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
};

export default ImageGallery;