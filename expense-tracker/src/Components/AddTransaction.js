import React, {useState} from 'react'

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
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
