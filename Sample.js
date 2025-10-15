function showMessage() {
  const message = document.getElementById("message");
  const time = new Date().toLocaleTimeString();
  message.textContent = `Hello, Prakash! 🧠 The current time is ${time}`;
  console.log("Button clicked at:", time);
}
