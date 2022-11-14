let x = document.getElementsByTagName("input");

for (let index = 0; index < 10; index++) {
  if (x[index].type == "password") {
    x[index].type = "text";
  }
}
