const totalBillWithTip = document.getElementById("totalBillWithTip");
const tipAmount = document.getElementById("tipAmount");
const tipOutput = document.getElementById("tipOutput");
const billTotal = document.getElementById("billTotal");
const rangeTip = document.getElementById("tipInput");

function tipCalculator(){
    debugger
    let billBeforeTip = billTotal.value;
    let percentage = rangeTip.value * 0.01;

    let justTip = percentage * billBeforeTip;
    justTip = Math.round(justTip * 100) / 100;
    
    billBeforeTip = Math.round(billBeforeTip * 100) / 100;

    billAfterTip = Number(justTip) + Number(billBeforeTip);
    billAfterTip = Math.round(billAfterTip * 100) / 100;

    tipAmount.value = justTip;
    totalBillWithTip.value = billAfterTip;
}

rangeTip.addEventListener('mousemove', tipCalculator)