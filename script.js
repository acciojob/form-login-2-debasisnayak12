//your JS code here. If required.
function myFunction(){
	 let firstNameValue = document.getElementById("firstName").value;
	 let lastNameValue = document.getElementById("lastName").value;
	 let phoneNumberValue = document.getElementById("phoneNumber").value;
	 let emailValue = document.getElementById("email").value;
	 

      var resultMessage = "First Name:" + firstNameValue + "\n" +
		                    "Last Name:" + lastNameValue + "\n" +
		                    "Phone Number:" + phoneNumberValue + "\n" +
		                    "Email ID:" + emailValue;
		              
      alert(resultMessage);
}
