import React, { useState } from 'react';

function SnippetCard({snippet, onDelete, onEdit, onPin}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedSnippet, setEditedSnippet] = useState({...snippet});

    const handleSave = () => {
        onEdit(snippet.id, editedSnippet);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedSnippet({ ...snippet});
        setIsEditing(false);
    };

    return (
        <div className='SnippetCard'>
            {isEditing ? (
                <div className='input'>
                    <input value={editedSnippet.title} onChange={(e) => setEditedSnippet({...editedSnippet, title:e.target.value})} placeholder="Title" />
                    <textarea value={editedSnippet.content} onChange={(e) => setEditedSnippet({...editedSnippet, content:e.target.value})} placeholder="Content" />
                    <input value={editedSnippet.category} onChange={(e) => setEditedSnippet({...editedSnippet, category:e.target.value})} placeholder="Category" />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancle</button>
                </div>
            ) : (
                <div>
                    <h3>{snippet.title}</h3>
                    <div className="snippet-content">{snippet.content}</div>
                    <p><strong>Category: </strong>{snippet.category}</p>
                    <button onClick={() => onPin(snippet.id)}>
                            {snippet.pinned ? 'Unpin' : 'Pin'}
                    </button>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(snippet.id)}>Delete</button>
                </div>
                )
            }
        </div>
    );
}

export default SnippetCard;