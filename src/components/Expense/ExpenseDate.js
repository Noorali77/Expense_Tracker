
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

    return(
        <>
        <li className="list-group-item w-100 mb-2">{month} {day} {year}</li>
        
        </>
    )
}

export default ExpenseDate;