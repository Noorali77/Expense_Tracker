import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expense.css'


function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
   
    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
      });

  

    return(
        <>

    <div>
   
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

<div className="container">
  <div className="row">
  
    <div className="col-md-12">
    <ul className="list-group list-group-horizontal mt-4">
        <li className="list-group-item w-100 mb-2 bg-secondary mb-3">Date</li>
        <li className="list-group-item w-100 mb-2 bg-secondary mb-3">Title</li>
        <li className="list-group-item w-100 mb-2 bg-secondary mb-3">Amount</li>

      </ul>
    </div>
  </div>
</div>


        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
    </div>




           
{/* 
          
        {         filteredExpenses.length > 0 && 
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                      key = {expense.id}
                      title={expense.title}
                      amount={expense.amount}
                      date={expense.date}
                    />
                  ))
                }

           

           {filteredExpenses.length === 0 && <p>No Expenses Found on {filteredYear}</p>} */}
        

             {
               filteredExpenses.length === 0 ? (<p className='fw-bold text-center'>No Expenses Found on {filteredYear}</p>) :  filteredExpenses.map((expense) => (
                 <ExpenseItem
                   key = {expense.id}
                   title={expense.title}
                   amount={expense.amount}
                   date={expense.date}
                 />
               ))} 
           
            
           

        </>
    )
}

export default Expenses;