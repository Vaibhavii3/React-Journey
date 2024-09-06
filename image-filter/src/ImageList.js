import React from 'react';

const ImageList = ({ image }) => {
    return (
        <div style={styles.imageGrid}>
            {image.map((image) => (
                <div key={image.id} style={styles.imageContainer}>
                    <img src={image.url} alt={`img-${image.id}`} style={styles.image} />
                </div>
            ))}
        </div>
    );
};

const styles = {
    imageGrid : {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)',
        gap: '20px',
        marginTop: '20px',
    },
    imageContainer: {
        border: '1px solid #ddd',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        display: 'block',
    },
};

export default ImageList
