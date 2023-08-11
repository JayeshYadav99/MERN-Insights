import React, { useState } from 'react';
import Correct from './Correct';
export default function Incorrect() {
  const[show,SetShow]=useState(true);
  const [code, setCode] = useState(`import { useState } from "react";

  function NameList() {
    const [list, setList] = useState(["Jack", "Jill", "John"]);
    const [name, setName] = useState(() => "Jack");
  
    const onAddName = () => {
        list.push(name);
      setList(list);
    
    };
    //Directly modifies the 'list' array using the push method and then updates the state using the same array reference using setList(list)
  
    return (
      <div>
        <ul>
          {list.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={onAddName}>Add Name</button>
      </div>
    );
  }
  ');`);
  

 

  //code
 
  return (
    <>
     <button
        className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        onClick={() => SetShow(!show)}
        style={{ padding: '0.5rem 1rem' }}
      >
     {show ? "Go to Correct Code" : "Go to InCorrect Code"}
 
      </button>
      {show ? (<div className="flex   bg-black">
      <div className="border rounded-lg p-4 w-1/2 bg-black text-white mt-4 mr-4 flex-shrink-0">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 text-center">
          Code:
        </h1>
        <pre className="text-sm whitespace-pre-wrap" style={{ backgroundColor: '#000', padding: '0.5rem' }}>
          {code}
        </pre>
      </div>
      <DemoContainer/>

    
    </div> ):(<Correct/>)}  
   </>


  );
}


const DemoContainer = () => {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState(() => "Jack");

  const onAddName = () => {
    list.push(name);
    
    setList(list);
   
    
   
  };

  

  return (
    <div className="border rounded-lg p-4 w-1/2 mt-4">
      <h1 className="mb-4 text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 text-center">
        Demo:Try Adding Name
      </h1>
      <ul className="space-y-2 ml-4">
        {list.map((listname, index) => (
          <li
            key={index}
            className="text-white bg-red-700 mb-4"
            style={{ padding: "0.5rem ", backgroundColor: "rgb(185 28 28)" }}
          >
            {listname}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-2 p-2 rounded border ml-4"
        placeholder="Enter a name"
      />
      <button
        onClick={onAddName}
        className="mt-2 ml-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        style={{ padding: "0.5rem 1rem" }}
      >
        Add Name
      </button>
    </div>
  );
};


