import React, { useState } from 'react';

function Buttons(props) {
    const [text, setText] = useState("")

    const addNote = () => {
        if (text) {
            const lastId = props.notes.length > 0 ? props.notes[props.notes.length - 1].id : 0;
    
            const newNote = {
              id: lastId + 1,
              description: text,
              completed: false
            }
            
            props.setNotes([...props.notes, newNote]);
            setText("")
        }   
    }

    const deleteAllNotes = () => {
        props.setNotes([]);
    }

    const completeAllNotes = () => {
        const updatedNote = props.notes.map((note) => ({...note, completed: true}))
        props.setNotes(updatedNote);
    }

    const incompleteAllNotes = () => {
        const updatedNote = props.notes.map((note) => ({...note, completed: false}))
        props.setNotes(updatedNote);
    }

    return(
        <div className='input-container'>
            <div className='input-main-buttons'>
                <input 
                    className="input-input"
                    type="text" 
                    placeholder='Add a task...' 
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <button className='input-button' onClick={addNote}>✓</button>
            </div>
            <div className="other-buttons">
                <button className='input-other-button' onClick={deleteAllNotes}>Delete all</button>
                <button className='input-other-button' onClick={completeAllNotes}>Complete all</button>
                <button className='input-other-button' onClick={incompleteAllNotes}>Incomplete all</button> 
            </div>
        </div>
    )
}

export default Buttons