	function isLeapYear(int) {//When passed a year, checks if the year is a leap year

	 return (((int % 4 == 0) && (int % 100 != 0)) || (int % 400 == 0));
	}


	function checkForm(form) {
	 var message;

	 var re = /^([a-zA-Z]{1,})$/; //regular expression for first name 
	 var se = /^([a-zA-Z\s\']{1,})$/; //regular expression for second name
	 var te = /^([a-zA-Z0-9_\-\.]{1,})\@([a-zA-Z_\-]{1,})\.([a-zA-Z\.]{2,5})$/; //regular expression for email 
	 var ue = /^([a-zA-Z0-9\']{6,12})$/; //regular expression for password 
	 //password must be between 6 and 8 charcater in length and contain at least one upper case character, one  lower case character, and one number.

	 var ve = /^([0]{1}[1-9]{1}[0-9]{7,8})$/; //regular expression for phoneNumber
	 /*Research into the formats of Irish mobile and landline numbers has shown that the first digit must be zero, 
the second digit can be anything except zeroand the length of the numbers must be between 9 and 10 inclusive. 
sources: https://en.wikipedia.org/wiki/Telephone_numbers_in_the_Republic_of_Ireland ; http://www.eirphonebook.ie/ ; sources accessed 03/11/2015 */

	 var day = parseInt(form.dobDay.value); //for DOB validation
	 var month = form.dobMonth.value; //for DOB validation
	 var year = parseInt(form.dobYear.value); //for DOB validation



	 //firstname validation
	 if (form.fName.value === '') {
	  alert("First Name must be filled in!");
	  form.fName.focus();
	  return false;
	 } else if (!(form.fName.value.match(re))) {
	  alert("Please enter a valid first name");
	  form.fName.focus();
	  return false;
	 }

	 //second name validation
	 else if (form.sName.value === '') {
	  alert("Second Name must be filled in!");
	  form.sName.focus();
	  return false;
	 } else if (!(form.sName.value.match(se))) {
	  alert("Please enter a valid second name");
	  form.startdate.focus();
	  return false;
	 }
	 //email validation
	 else if (form.eAddress.value === '') {
	  alert("Email must be filled in!");
	  form.eAddress.focus();
	  return false;
	 } else if (!(form.eAddress.value.match(te))) {
	  alert("Please enter a valid email");
	  form.eAddress.focus();
	  return false;

	 }
	 //phoneNumber validation 
	 else if (form.phone.value === '') {
	  alert("Phone Number must be filled in!");
	  form.phone.focus();
	  return false;
	 } else if (!(form.phone.value.match(ve))) {
	  alert("Please enter a valid phone number");
	  form.phone.focus();
	  return false;
	 }
	 //password validation 
	 else if (form.pw1.value === '') {
	  alert("Password must be filled in!");
	  form.pw1.focus();
	  return false;
	 } else if (form.pw2.value === '') {
	  alert("Please confirm password");
	  form.pw2.focus();
	  return false;
	 } else if (!(form.pw1.value === form.pw2.value)) {
	  alert("Passwords don't match");
	  form.pw1.focus();
	  return false;
	 } else if ((form.pw1.value === form.pw2.value) && !(form.pw1.value.match(ue))) {
	  alert("In the interest of security, please enter a password of 6 to 12 characters, containing upper and lower case characters and at least one number.");
	  form.pw1.focus();
	  return false;
	 }


	 //DOB validation 
	 //First checking if dates are entered, then checking if February date is > 28 or , if a leap year, > 29.
	 else if (form.dobDay.value === "") {
	  alert("Please enter your day of birth")
	  form.dobDay.focus();
	  return false;
	 } else if (form.dobMonth.value === "") {
	  alert("Please enter your month of birth")
	  form.dobMonth.focus();
	  return false;
	 } else if (form.dobYear.value === "") {
	  alert("Please enter your year birth")
	  form.dobYear.focus();
	  return false;
	 } else if (((month === '02') && (day > 28) && !isLeapYear(year)) || ((month === '02') && (day > 29) && isLeapYear(year))) {
	  alert("Please enter a valid date");
	  form.dobDay.focus();
	  return false;
	 } else if ((month === '04' || month === '06' || month === '09' || month === '11') && day > 30) {
	  alert("Please enter a valid date");
	  form.dobDay.focus();
	  return false;
	 }


	 //checkbox validation
	 else if (!form.box.checked) {
	  alert("If over 18 years of age, Please tick box to confirm eligibility");
	  form.box.focus();
	  return false;

	 } else {

	  message = "All input fields have been validated!\n";

	 }
	 alert(message);
	 return true;
	}
