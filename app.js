function onClick() {
  let note = document.getElementById("text1");
  document.getElementById("text2").value = note;
  document.getElementById("container2").style.display="block"


}

/*
let d1 = document.getElementById("container1");
let d2 = document.getElementById("container2");
togg1.addEventListener("click", () => {
  if (getComputedStyle(d1).display != "none") {
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
});

function togg() {
  if (getComputedStyle(d2).display != "none") {
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
}
togg2.onclick = togg;
