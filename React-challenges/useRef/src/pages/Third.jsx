import { useRef,useState } from 'react';

export default function Toggle() {

const[change,Setchange]=useState(false);

  return (
    <button onClick={() => {
      Setchange(!change);
    }}>
      {change ? 'On' : 'Off'}
    </button>
  );
}
