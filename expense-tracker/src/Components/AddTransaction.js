import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = event => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text, 
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value= {text} onChange={(event) => setText(event.target.value)} id="text" placeholder="Enter text..."/>
        </div>
        <div class="form-control">
          <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder='Enter amount...' />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  )
}
