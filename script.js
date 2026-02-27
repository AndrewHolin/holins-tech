document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.querySelector("input[type=text]").value;
  const email = document.querySelector("input[type=email]").value;
  const phone = document.querySelectorAll("input[type=text]")[1].value;
  const message = document.querySelector("textarea").value;

  const contactData = {
    name,
    email,
    phone,
    message
  };

  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(contactData);

  localStorage.setItem("messages", JSON.stringify(messages));

  alert("Message Sent Successfully!");
  this.reset();
});