function ubahLatar() {
  // ambil target object dan nilai input
  const targetObject = document.getElementById("targetObject");
  const inputValue = document.getElementById("inputHexa").value;

  // masukkan background color ke target object
  targetObject.style.backgroundColor = inputValue;
}
