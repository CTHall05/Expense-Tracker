import React from 'react';
import { Header } from './Components/Header.js';
import { Balance } from './Components/Balance.js'; 
import { IncomeExpenses } from './Components/IncomeExpenses.js';
import { TransactionList } from './Components/TransactionList.js';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
      </div>
    </div>
  );
}

export default App;
