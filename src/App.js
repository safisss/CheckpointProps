
import React from 'react';
import './App.css';
import Component from './profile/Component';
import im from './image/webdeveloper.jpg';

 function App () {
   
const handleName = (FullName) => alert(FullName) 
  return (
  <div classname="App">
 <Component FullName="Sellami Safa" Bio="Full-stack JavaScript Developer" Profession="A web developer" handleName={handleName} > 

 <img src={im} />

 </Component>

  </div>
  );
  }

export default App;



