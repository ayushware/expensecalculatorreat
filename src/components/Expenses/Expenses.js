import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css'
function Expenses(props){
    const[filteredYear,setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear=>{
      setFilteredYear(selectedYear);
      props.onExpensesFilter(selectedYear);
    };
    
    return (
        <div className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFiler = {filterChangeHandler}/>
        <ExpensesChart expenses={props.expenses} />
        <ExpensesList expenses={props.expenses}></ExpensesList>
        </div>
    );
}

export default Expenses;