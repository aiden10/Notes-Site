import React, {useState, useEffect} from 'react';
import "./styling/Home.css"

const addText = async (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    const contents = event.target[1].value;
    try {
        const response = await fetch('http://127.0.0.1:8000/text/api/add-note/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, contents }),
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } 
        else {
          const errorData = await response.json();
          console.error(errorData); 
        }
      } 
      catch (error) {
        console.error('Error:', error);
      }
      window.location.reload();
};

const Home = () => {

    const [notes, setNotes] = useState([]);

    const getText = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/text/api/all-notes/')
            if (response.ok) {
              const data = await response.json();
              const notes = data.notes;
              console.log(notes[0].note_title)
              setNotes(notes);
            } 
            else {
              const errorData = await response.json();
              console.error(errorData); 
            }
          } 
          catch (error) {
            console.error('Error:', error);
          }
    };
    
    useEffect(() => {
        getText();
      }, []); 

    if (localStorage.getItem('userID')) {
    // User is logged in
        return (
            <div className="home-page">
                <h1>Logged in</h1>
                <div id='text-form'>
                    <form onSubmit={addText}>
                        <div id='title-field'>
                            <label htmlFor="title">Note Title</label>
                            <input name="title" id="title" maxlength="25"/>
                        </div>

                        <div id="contents-field">
                            <label htmlFor="contents">Note Contents</label>
                            <textarea name="contents" id="contents" rows='4' cols="50"/>
                        </div>

                        <div>
                            <button type="submit" id="create-note-button">Create Note</button>
                        </div>
                    </form>            
                </div>
                <div id='notes-container'>
                    <ul>
                    {notes.map((note) => (
                        <li key={note.note_title}>
                        <h2>{note.note_title}</h2>
                        <p>{note.note_contents}</p>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        );
    }
    else {
        // User is not logged in
        return (
            <div className="home-page">
                <h1>Logged out</h1>
                <h2>Log in to add new notes</h2>
            </div>
        );
    }
};

export default Home;
