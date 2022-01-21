import './Expense.css'

function ExpensesFilter(props){
    const dropdownChangeHandler = (event) => {
      props.onChangeFilter(event.target.value);

    };
  
    return (
      <>
      
      <div className="container mt-4">

        <div className="row">

          <div className="col-md-2">

          </div>
             
     <div className="col-md-8">
          <label className="form-label fw-bold fs-5">Year:</label> &nbsp;
          <select className="dropdown" value={props.selected} onChange={dropdownChangeHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>


          </select>

    
          </div>
    
        
     </div>

        </div>
     
      </>
      
    );
  };
  
  export default ExpensesFilter;