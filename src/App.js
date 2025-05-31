import React, { useState } from 'react';
import './App.css';
import SnippetForm from './SnippetForm';
import SnippetCard from './SnippetCard';

function App() {
  const [snippets, setSnippets] = useState([]);

  const addSnippet = (snippet) => {
    setSnippets([...snippets, {...snippet, id: Date.now(), pinned: false}]);  
  };

  const deleteSnippet = (id) => {
    setSnippets(snippets.filter((s) => s.id !== id));
  };
  
  const editSnippet = (id, update) => {
    setSnippets((prev) => 
      prev.map(snippet => (snippet.id === id ? {...snippet, ...update} : snippet))
    );
  };

  const togglePin = (id) => {
    setSnippets(
      snippets.map((s) => 
      s.id === id ?  {...s, pinned: !s.pinned} : s
    )
    );
  };

  return(
    <div className="App">
      <h1>SnippetHub!🚀 </h1>
      <SnippetForm onAdd={addSnippet} />

      <h2>📌 Pinned Snippets</h2>
      <div className="SnippetList">
        {snippets.filter(s => s.pinned).map(s => (
        <SnippetCard key={s.id} snippet={s} onDelete={deleteSnippet} onEdit={editSnippet} onPin={togglePin} />
      ))}
      </div>

      <h2>📝 All Snippets</h2>
      <div className="SnippetList">
        {snippets.map(s => (
        <SnippetCard key={s.id} snippet={s} onDelete={deleteSnippet} onEdit={editSnippet} onPin={togglePin} />
      ))}
      </div>
    </div> 
  );
}

export default App;