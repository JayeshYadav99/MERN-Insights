import { useState, useRef,useEffect } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
const ref=useRef(null);


  
  // function handleClick() {
  //   const nextIsPlaying = !isPlaying;
  //   playvideo();
  
   
  // }

  function playvideo(){
      const nextIsPlaying = !isPlaying;
      setIsPlaying(nextIsPlaying);
    ref.current.play();
  }
    function pausevideo(){
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);
    ref.current.pause();
  }
  
  


  return (
    <>
      
      {!isPlaying ? (  <button onClick={playvideo}>play</button>):( <button onClick={pausevideo}>pause</button>)}
      <video width="250" ref={ref}   onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)} >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
