import { useState } from 'react';

function Popup() {
  const [topic, setTopic] = useState('');

  const handleSave = () => {
    chrome.storage.local.set({ studyTopic: topic }, () => {
      alert('Study topic saved!');
    });
  };

  return (
    <div style={{ padding: '1rem', width: '250px' }}>
      <h3>What are you studying today?</h3>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ width: '100%' }}
      />
      <button onClick={handleSave} style={{ marginTop: '1rem' }}>Save</button>
    </div>
  );
}

export default Popup;
