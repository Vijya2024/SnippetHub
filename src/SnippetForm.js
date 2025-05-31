import React, { useState } from 'react';

const SnippetForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            onAdd({title, content, category});
            setTitle('');
            setContent('');
            setCategory('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />

            <button type="submit">Add Snippet</button>

        </form>
    );
}


export default SnippetForm;