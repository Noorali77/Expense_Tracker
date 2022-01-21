import Card from './components/UI/Card';
import Expenses from './components/Expense/Expenses'
import NewExpense from './components/New Expense/NewExpense';
import { useState } from 'react';


function App() {

  const[expenses,setExpenses] = useState([])

  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses)=>{
      return(
        [expense,...prevExpenses] 
      )
    })
          
  }

  

  return (
    <Card>
      <h1 className='text-secondary text-center mb-3'>Expense Tracker:</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>

    <Expenses item={expenses}/>
   
     

    </Card>
  );
}

export default App;
