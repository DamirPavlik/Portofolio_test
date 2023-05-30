import React, {useEffect, useState} from 'react'

export const Caret = () =>{
    const [showCaret, setShowCaret] = useState(true);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setShowCaret((prevShowCaret) => !prevShowCaret);
      }, 500);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return <span>{showCaret ? '|' : ''}</span>;
}