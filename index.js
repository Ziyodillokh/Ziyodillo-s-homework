// HOME-WORK 

document.body.style.backgroundColor = "black";
const btn = document.createElement("button");
btn.innerHTML = "click me🫵";
document.body.appendChild(btn);

let div;

btn.addEventListener("click", () => {
  if (!div) {
    div = document.createElement("div");
    document.body.appendChild(div);
    div.style.backgroundColor = "#842784";
    div.style.height = "320px";
    div.style.width = "420px";
    div.style.marginLeft = "520px";
    div.style.marginTop = "140px";
    div.style.borderRadius = "10px";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";

    const div2 = document.createElement("div");
    div2.style.backgroundColor = "rgb(253, 165, 1)";
    div2.style.height = "120px";
    div2.style.width = "90px";
    div2.style.borderRadius = "10px";

    const div3 = document.createElement("div");
    div3.style.backgroundColor = "rgb(253, 165, 1)";
    div3.style.height = "80px";
    div3.style.width = "90px";
    div3.style.marginRight = "10px";
    div3.style.borderRadius = "10px";

    const div4 = document.createElement("div");
    div4.style.backgroundColor = "rgb(253, 165, 1)";
    div4.style.height = "200px";
    div4.style.width = "90px";
    div4.style.margin = "10px";
    div4.style.borderRadius = "10px";

    const div5 = document.createElement("div");
    div5.style.backgroundColor = "rgb(253, 165, 1)";
    div5.style.height = "140px";
    div5.style.width = "90px";
    div5.style.borderRadius = "10px";

    div.appendChild(div5);
    div.appendChild(div4);
    div.appendChild(div3);
    div.appendChild(div2);
  } else {
    document.body.removeChild(div);
    div = null; // divni o'z holiga qaytarish u/n div==null🧑‍💻
  }
});
