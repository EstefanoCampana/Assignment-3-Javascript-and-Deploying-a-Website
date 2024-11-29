// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submit_button = document.getElementById("submit-button");
const replace_text = document.getElementById("contact-page");
const new_para = document.createElement("p");

//function submitButtonHandler(){}

submit_button.addEventListener("click", () => {
    replace_text.appendChild(new_para);
    new_para.classList.add("large-text");
    new_para.classList.add("contact");
    new_para.classList.add("more-space");
    new_para.innerHTML = "Thank you for your message!";
    replace_text.replaceWith(new_para);
});
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

