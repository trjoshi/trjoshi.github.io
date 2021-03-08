/**
 * 
 */

function tipCalc() {

	let subTot = document.getElementById("subTotal").value;
	let tip = document.getElementById("tip").value;
	let total = (Number(subTot) * Number(tip))/100;
	let rslt = document.getElementById("result");
	console.log(total);
	rslt.innerHTML = total;

}