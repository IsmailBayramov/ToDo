import { useLocalStorage } from "@uidotdev/usehooks";
import Notes from './components/Notes';
import Header from './components/Header';
import Buttons from './components/Buttons';

function App() {
  const [notes, setNotes] = useLocalStorage('notes', []);

  return (
    <div className='app'>
      <Header />

      <div className='main'>
        <Buttons 
          setNotes={setNotes}
          notes={notes}
        />
        <Notes 
          setNotes={setNotes}
          notes={notes}
        />
      </div>
    </div>
  ) 
}

export default App