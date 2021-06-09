import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const expensesArray = [
    {
      id:1,
      date: new Date(2022,5,12),
      title: "Car Insurance",
      amount: 21
    },
    {
      id:2,
      date: new Date(2021,6,12),
      title: "Electricity Bill",
      amount: 33
    },
    {
      id:3,
      date: new Date(2022,6,12),
      title: "Grocery Shopping",
      amount: 33
    },
    {
      id:4,
      date: new Date(2022,6,6),
      title: "Movie Tickets",
      amount: 33
    },
    {
      id:5,
      date: new Date(2021,7,12),
      title: "Gas Bill",
      amount: 55
    },
    {
      id:6,
      date: new Date(2019,8,12),
      title: "Water Bill",
      amount: 999
    },
  ];
function App() {
  
  const [expenses,setExpenses] = useState(expensesArray);

  const addExpenseHandler = (expense)=>{
    console.log(expense);

    const newExpense = {
      date: new Date(expense.enteredDate),
      title: expense.enteredTitle,
      amount: expense.enteredAmount  
    };
    setExpenses(prevExpenses => {
        return ([newExpense,...prevExpenses]);
    });
  };

  const expenseFilterHandler = (year)=>{
    console.log(year);
    let filteredExpenses = expensesArray.filter(current=>{
      return (current.date.getFullYear() == year);
    });
    // console.log([filteredExpenses,...expensesArray]);
    setExpenses(filteredExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} onExpensesFilter = {expenseFilterHandler}/>
    </div>
  );
}

export default App;
