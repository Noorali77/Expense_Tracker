import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    const dataSaveHandler = (expenses)=>{

        let expenseData = {
            ...expenses,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)


    }


    return(
        <>
        <ExpenseForm onDataExpenseSave={dataSaveHandler}/>
        </>
    )
}

export default NewExpense;