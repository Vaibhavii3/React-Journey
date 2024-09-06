import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = () => {

    const accordionData = [
        { title: 'section 1', content: 'This is the content for section 1.'},
        { title: 'section 2', content: 'This is the content for section 2.'},
        { title: 'section 3', content: 'This is the content for section 3.'},
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Accordion Menu</h1>
            {accordionData.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

const styles = {
    container: {
        width: '60%',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        color: 'white',
    },
};

export default Accordion