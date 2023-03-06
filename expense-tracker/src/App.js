import React from 'react';
import { Header } from './Components/Header.js';
import { Balance } from './Components/Balance.js'; 
import { IncomeExpenses } from './Components/IncomeExpenses.js';
import { TransactionList } from './Components/TransactionList.js';
import { AddTransaction } from './Components/AddTransaction.js';

import { GlobalProvider } from './Context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
