function ubahLatar() {
  // get the target object and the input value
  const targetObject = document.getElementById("targetObject");
  const inputValue = document.getElementById("inputHexa").value;

  // set the background color of the target object to the input value
  targetObject.style.backgroundColor = inputValue;
}
