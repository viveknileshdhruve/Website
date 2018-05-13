/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function showpay() {
        if ((document.calc.loan.value == null || document.calc.loan.value.length == 0) ||
                (document.calc.months.value == null || document.calc.months.value.length == 0)
                ||
                (document.calc.rate.value == null || document.calc.rate.value.length == 0))
        {
            document.calc.pay.value = "Incomplete data";
        } else
        {
            var princ = document.calc.loan.value;
            var term = document.calc.months.value;
            var intr = document.calc.rate.value / 1200;
            document.calc.pay.value = (princ * intr / (1 - (Math.pow(1 / (1 + intr), term)))).toFixed(2);
        }
    }

