import { useState } from "react";
// import './ExpenseForm.css'
import './NewExpense'

function ExpenseForm(props){

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

   let titleChangeHandler = (event)=>{
       setEnteredTitle(event.target.value);
       console.log(event.target.value);
   }

   
   let amountChangeHandler = (event)=>{
    setEnteredAmount(event.target.value);
    console.log(event.target.value);

}
    
   let dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value);
    console.log(event.target.value)

}

let submitHandler = (event)=>{
    event.preventDefault();

    let expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    }

    props.onDataExpenseSave(expenseData)
     
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');

}


    return(

                  <div className="container card_container">

                     <div className="row">


            <div className="col-md-2">

            </div>

            <div className="col-md-8">
            <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="fw-bold fs-5 mt-2">Title:</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="fw-bold fs-5">Amount:</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="fw-bold fs-5">Date:</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} className="form-control"/>
        </div>
        
        
        <button type="submit" className="btn btn-primary">Add Expense</button>
      </form>
       
      
          
          </div>
            </div>
        </div>
    )
}

export default ExpenseForm;