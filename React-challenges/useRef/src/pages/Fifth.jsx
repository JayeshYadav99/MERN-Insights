import { useState, useRef } from 'react';

export default function Chat() {
  const ref=useRef(null);
  
  const [text, setText] = useState('');

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + ref.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => {setText(e.target.value); ref.current=e.target.value;}}
        ref={ref}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
