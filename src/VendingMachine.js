import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"


const VendingMachine = () => {
    return (
        <div>
            <h1>Vending Machine</h1>
            <Link to="/chips">Chips</Link>
            <Link to="/popcorn">Popcorn</Link>
            <Link to="/poptarts">Poptarts</Link>
        </div>
    )
}

export default VendingMachine