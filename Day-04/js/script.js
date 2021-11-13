// function registerName() {
//   if (!input.value) {
//     alert("please enter a name");
//     return;
//   }
//   user.name = input.value;
//   input.value = "";
//   alert("Thank you " + user.name + "!");
// }

function validate() {
  if (!document.form1.txtInput.value.match(/^[0-9]/)) {
    alert("please enter vaild value");
  } else {
    alert("success");
  }
}

function registerName() {
  userInput = document.getElementById("input").value;
  if (!isNaN(userInput)) {
    alert("Is a number");
  } else {
    alert("Is not a number");
  }
}
