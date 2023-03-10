import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown/Dropdown';
import EmojiContainer from './components/EmojiContainer/EmojiContainer';
import EmojiRow from './components/EmojiRow/EmojiRow';
import Form from './components/Form/Form';

function App() {
  const [formValue, setFormValue] = useState('');
  const [limit, setLimit] = useState('14');

  const onFormChange = (e) => {
    const search = e.target.value;
    setFormValue(search);
  }

  const getSelectedValue = (e) => {
    setLimit(e.target.value)
  }

  return (
    <div className="App">
      <Dropdown getSelectedValue={getSelectedValue} />
      <Form formValue={formValue} onFormChange={onFormChange} />
      <EmojiContainer>
        <EmojiRow search={formValue} limit={limit} />
      </EmojiContainer>
    </div>
  );
}

export default App;
