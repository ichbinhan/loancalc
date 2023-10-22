
const loanAmountE1 = document.querySelector("#loanAmount");
const interestRateE1 = document.querySelector("#interestRate");
const loanYearE1 = document.querySelector("#loanYear");
const principalE1 = document.querySelector("#principal");
const resultE1 = document.querySelector("#result");
const tableTbodyE1 = document.querySelector("#resultTable>tbody");

function roanCalc() {
    let loanAmount = loanAmountE1.value * 10000;
    let interestRate = interestRateE1.value;
    let loanYear = loanYearE1.value;

    let principal = principalE1.checked;
    //console.log(loanAmount, interestRate, loanYear);

    let amount = loanAmount
    let months = loanYear * 12
    let monthRate = interestRate / 100 / 12
    //固定還款金額
    let monthPay = parseInt(amount / months);

    let resultPayment = [];

    //let liText = "";
    //跑動期數

    for (let i = 0; i < months; i++) {
        //計算每月利息   
        let interest = Math.round(amount * monthRate);
        amount -= monthPay;
        //最後一期
        let liText = "";
        if (i == months - 1) {
            resultPayment.push([i + 1, monthPay + amount, interest, monthPay + interest + amount, 0]);
            //text = (`期別:${i + 1} 本金:${monthPay + amount} 利息:${interest} 本利和:${monthPay + interest + amount} 餘額:0`);
        }
        else {
            resultPayment.push([i + 1, monthPay, interest, monthPay + interest, amount]);
            //text = (`期別:${i + 1} 本金:${monthPay} 利息:${interest} 本利和:${monthPay + interest} 餘額:${amount}`);
        }
    }



    let totalInterest = 0;
    for (let i = 0; i < resultPayment.length; i++) {
        totalInterest += resultPayment[i][2];
    }
    resultE1.innerHTML = `總期數:${resultPayment.length} 總利息支出:${totalInterest} 總還款金額:${totalInterest + loanAmount}`;
    drawTable(resultPayment);

}
//繪製表格
function drawTable(resultPayment) {
    //console.log(tableTbodyE1, resultPayment);
    let tableHtml = "";
    for (let i = 0; i < resultPayment.length; i++) {
        tableHtml += "<tr>";
        for (let j = 0; j < resultPayment[i].length; j++) {
            tableHtml += `<td>${resultPayment[i][j]}</td>`;
        }
        tableHtml += "</tr>";
    }
    if (tableHtml != "") {
        document.querySelector("#resultTable").style.display = "table";
    }

    tableTbodyE1.innerHTML = tableHtml;

}



