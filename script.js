let expenses = [];
let totalAmt = 0;
let totalsalaryAmt = 0;



const salaryAmt = document.getElementById("Salary");
const expenseAmt = document.getElementById("Expense");
const dateIp= document.getElementById("Date");
const expenseTableCell = document.getElementById("expensetable");
const totalExpense = document.getElementById("totalexpense");
const totalsalary =  document.getElementById("totalsalary");
const totalbalance = document.getElementById("totalbalance");

document.querySelector("input[type='submit']").addEventListener("click", function(e)
{
    e.preventDefault();

    let salary = parseFloat(salaryAmt.value);
    let expense = parseFloat(expenseAmt.value);
    let date = dateIp.value;

    if(isNaN(salary) || isNaN(expense) || date === '')
    {
        alert("one of the data is empty or incorrect");
        return
    }

    expenses.push({ salary , expense , date});

    let row=document.createElement("tr");
    row.innerHTML=`<td>${salary}</td><td>${expense}</td><td>${date}</td>`;
    expenseTableCell.appendChild(row);
      
    totalAmt += expense;
    totalsalaryAmt +=salary;
    let totalbalanceAmt = totalsalaryAmt - totalAmt;
    
    totalExpense.textContent=totalAmt;
    totalsalary.textContent=totalsalaryAmt;
    totalbalance.textContent=totalbalanceAmt;

    salaryAmt.value="";
    expenseAmt.value="";
    dateIp.value="";
});
document.querySelector("input[type='reset']").addEventListener("click", function(e){
expenses = [];
totalAmt = 0;
totalsalaryAmt = 0;
expenseTableCell.innerHTML = "";
totalExpense.textContent = "0";
totalsalary.textContent = "0";
totalbalance.textContent = "0";
});