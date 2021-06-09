import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput,setUserInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    });
    const [showExpenseForm,toggleExpenseForm] = useState(false);

    const amountChangeHandler = (event)=>{
        setUserInput({
            ...userInput,
            enteredAmount:event.target.value
        });
    };
    
    const titleChangeHandler = (event)=>{
        setUserInput({
            ...userInput,
            enteredTitle:event.target.value
        });
    };
    
    const dateChangeHandler = (event)=>{
        setUserInput({
            ...userInput,
            enteredDate:event.target.value
        });
    };
    
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = userInput;
        // console.log(props.)
        props.onSaveExpenseData(userInput);
        toggleExpenseForm(!showExpenseForm);
        setUserInput({
            enteredTitle:'',
            enteredAmount:'',
            enteredDate:''
        });
    };

    const addNewExpenseHandler = (event)=>{
        event.preventDefault();
        toggleExpenseForm(!showExpenseForm);
    };

    if(!showExpenseForm){
        return (<div className="new-expense__actions">
            <button type="submit" onClick={addNewExpenseHandler}>Add New Expense</button>
        </div>);
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" value={userInput.enteredDate} step="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button type="submit" onClick={addNewExpenseHandler}>Cancel</button>
        </div>
    </form>
};

export default ExpenseForm;