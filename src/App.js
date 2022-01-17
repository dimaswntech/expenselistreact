import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_DATA = [
    {
      id: 'e1',
      title: 'Bayar WIFI',
      amount: 1000000,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'TV Baru',
      amount: 500000,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Pajak Motor',
      amount: 294000,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Meja Baru',
      amount: 100000,
      date: new Date(2021, 5, 12),
    },
  ];
  console.log(DUMMY_DATA);
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    })
  }
  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
