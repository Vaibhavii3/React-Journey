import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    const styles = {
        item: {
            border: '1px solid #ddd',
            borderRadius: '4px',
            marginBottom: '10px',
            overFlow: 'hidden',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        header: {
            backgroundColor: '#f7f7f7',
            padding: '15px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '18px',
            transition: 'background-color 0.3s',
        },
        content: {
            padding: '15px',
            backgroundColor: '#fff',
            maxHeight: isExpanded ? '100%' : '0',
            overFlow: 'hidden',
            transition: 'max-height 0.3s ease',
        },
    };

    return (
        <div style={styles.item}>
            <div style={{ ...styles.header, backgroundColor: isExpanded ? '#F4E1FF' : '#E0B0FF'}} onClick={toggleAccordion}>
                {title}
            </div>
            <div style={styles.content}>
                {isExpanded && <p>{content}</p>}
            </div>
        </div>
    );
};

export default AccordionItem