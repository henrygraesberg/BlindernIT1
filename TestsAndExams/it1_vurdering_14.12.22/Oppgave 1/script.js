const inputField = document.querySelector("input");

const nameText = document.getElementById("Name");

const button = document.querySelector("button");

button.onclick = () => {
    const name = inputField.value;

    nameText.innerHTML = name;
}