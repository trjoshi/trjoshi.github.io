//"unused": false,

function tipCalc() {
	var subTot = document.getElementById("subTotal").value;
	var tip = document.getElementById("tip").value;
	var total = (Number(subTot) * Number(tip))/100;
	var rslt = document.getElementById("result");
	console.log(total);
	rslt.innerHTML = total;
}