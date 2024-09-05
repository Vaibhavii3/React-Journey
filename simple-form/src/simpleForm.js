import React, { useState} from 'react';
import FormDataDisplay from './formDataDisplay';


const SimpleForm = () => {
    const [formData, setFormData] = useState({ name: '', email: ''});
    const [submittedData, setSubmittedData] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({ name: '', email: ''});
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '50px',
            fontFamily: 'Arial, sans-serif',
        },
        form: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '400px',
            width: '100%',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
        },
        input: {
            marginBottom: '15px',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid blue',
            borderRadius: '4px',
            outline: 'none',
            width: '100%',
        },
        button: {
            padding: '10px',
            backgroundColor: '#007bff',
            width : '100%',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s',
            alignItems: 'center',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        dataDisplay: {
            marginTop: '30px',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            backgroundColor: '#e9ecef',
            width: '400px',
            textAlign: 'left',
        },
    };


    return (
        <div style={styles.container}>
        <h1>Simple Form</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
            <div>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                style={styles.input}
                />
            </div>
            <div>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                style={styles.input}
                />
            </div>
            <button type="submit" 
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            >Submit</button>
        </form>

        
        {submittedData && <FormDataDisplay data={submittedData} />}
    </div>
    );
}

export default SimpleForm;