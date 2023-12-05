var isDate = function (input) {
  //   write your code here
	const date = new Date(input);
	// alert(date);
	if (date=="Invalid Date"){
		return false;
	}
	else{
		return true;
	} 
};
// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
