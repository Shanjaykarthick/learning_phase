import logo from './logo.svg';
import React from 'react';
import Linkedin from './Linkedin'
import Props from './props';
import './App.css';
import './Counter.css';
import Demo from './Demo'
import Dynamic from './Dynamic';
import Table from './Table';
function App() {
   const obj ={
    
     property: "definition",
     state: "data managed inside component",
     props:" data passsed from parent",
     property:'mutatable',
     state:'yes',
     props:'no',
     property:'controls',
     state:'itself',
     props:'parent component',
     property:'purpose',
     state:" manage dynamic data",
     props:"share data"


    
   }

   const arr=[1,2,3,4,5];
   const arrobj=[{key:"value"},{key:"value"},{key:"value"}]
  return (
    <center>
   <div>
    
      <Table/>
    </div>
    </center>
  );
}

export default App;
