
import ExpenseDate from "./ExpenseDate";
import './Expense.css'

function ExpenseItem(props){


   
    return(
        <div className="container">
            <div className="row">

            </div>


            <div className="col-md-12">

          

            <ul className="list-group list-group-horizontal">
                <ExpenseDate date={props.date}/>
        <li className="list-group-item w-100 mb-2">{props.title}</li>
        <li className="list-group-item w-100 mb-2">{props.amount}</li>

      </ul>
            </div>
        </div>
    )
}

export default ExpenseItem;