Thanks, Vijya! Based on your additional `SnippetCard.js` file, I’ll update the `README.md` to reflect the new features—**editing and deleting snippets**, and I’ll also include this new file in the project structure.

Here’s the updated `README.md`:

---

# 📚 SnippetHub — Snippet Management App

**SnippetHub** is a React-based application that allows users to save, view, and manage small pieces of information—like code snippets, notes, or links. It’s fully client-side, using React's `useState` for state management, with no backend or external storage.

## 🚀 Features

* ✅ Add and save new snippets with title, content, and category
* 📌 Pin or unpin snippets for priority viewing
* 📝 Edit existing snippets inline
* 🗑️ Delete snippets when no longer needed
* 🧭 Organized layout with **Pinned Snippets** and **All Snippets**
* 🎨 Clean UI with minimal custom CSS

## 📁 Project Structure

```
src/
├── App.js            
├── SnippetForm.js    
├── SnippetCard.js    
├── App.css           

```

## 🛠️ Technologies Used

* React (Functional Components + Hooks)
* HTML & CSS (pure, no frameworks)
* No backend – data exists only during session (in memory)

## 🧑‍💻 How to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/snippethub.git
   cd snippethub
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the app:**

   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`.

## 🧼 Future Enhancements

* 🔒 Add localStorage to persist snippets across sessions
* 🎨 Integrate Chakra UI or Tailwind CSS for better styling and responsiveness
* 🔍 Filter/search snippets by category or content
* 🧾 Markdown formatting for code snippets

---
