import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = (props)=>{
    let expensesContent = <p>No Expense Found</p>;

    if(props.expenses.length == 0){
        return <h2>No Expenses Found</h2>;
    }

    return (<ul className="expenses-list">
        {props.expenses.map((expense,index)=>{
            return (<ExpenseItem
                key={index} 
                expenseDate={expense.date}
                expenseTitle={expense.title}
                expenseAmount={expense.amount}  
            ></ExpenseItem>)
        })}
    </ul>);
}

export default ExpensesList;