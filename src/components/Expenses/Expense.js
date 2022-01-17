import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expense.css'
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
    const [selectYears, setSelectYear] = useState('2020');
    const filterChangeHandler = (selectYear) => {
        setSelectYear(selectYear);
        console.log(selectYears);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectYears;
    });
    // console.log(filteredExpenses);


    return (
        <Card className="expenses">
            <ExpensesFilter selectedY={selectYears} onFilterHandler={filterChangeHandler} />
            {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date} />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date} />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date} />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date} /> */}
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card >);
}
export default Expense;