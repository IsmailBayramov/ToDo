function Notes(props) {
    const handleDeleteNote = (deletedNoteId) => {
        const updatedNotes = props.notes.filter((note) => note.id !== deletedNoteId);
        props.setNotes(updatedNotes);
    }

    const handleToggleStatus = (id) => {
        const updatedNotes = props.notes.map((note) => (note.id === id 
            ? { ...note, completed: !note.completed } 
            : note));

        props.setNotes(updatedNotes);
    }

    if (props.notes.length > 0) {
        return (
            <div className='note-container'>
                {props.notes.map((el) => (
                    <div className='note' key={el.id}>
                        <input 
                            type="checkbox" 
                            onChange={() => handleToggleStatus(el.id)}
                            checked={el.completed}
                        />
                        <p className={`note-description ${props.notes.find(dict => dict.id === el.id).completed ? 'completed' : ''}`}>
                            {el.description}
                        </p>
                        <button onClick={() => handleDeleteNote(el.id)}>✕</button>
                    </div>
                ))}
            </div>
        )
    }
    else {
        return (
            <div>
                <p>Задач пока нет.</p>
            </div>
        )
    }
}

export default Notes
