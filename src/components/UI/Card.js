

function Card(props){
    return(
        <>

<div className="container card_container mt-5">
    <div className="row">
             
    <div className="col-md-1">

    </div>

    <div className="col-md-10">
    <div className="card">
        <div className="card-body">
       {props.children}
        </div>
      </div>
    </div>

    </div>

</div>
        
        </>
    )
}

export default Card;