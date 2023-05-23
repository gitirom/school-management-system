import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        await fetch('/upload', {
            method: 'POST',
            body: formData,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="file">Choose a PDF file:</label>
            <input type="file" id="file" accept=".pdf" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadForm;