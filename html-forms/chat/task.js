const answers = [
  "Кто вы такой? Я вас не звал. Идите в баню!",
  "Купите у нас уважение чтобы сменить формат общения.",
  "Приходите потом, когда у меня будет хорошее настроение.",
  "Если хотите пожаловаться, пишите Морфиусу.",
  "До встречи в Матрице!",
];

const chat = document.querySelector(".chat-widget");
const input = document.getElementById("chat-widget__input")
const message = document.getElementById("chat-widget__messages")

chat.addEventListener('click', () => {
  chat.classList.add("chat-widget_active");
})

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {

      const time = () => {
          const date = new Date();
          return [date.getHours(), date.getMinutes()].join(":");
      }

      const randoomIndex = Math.floor( Math.random() * (answers.length - 0) + 0 );

      message.innerHTML += `
          <div class="message">
              <div class="message__time">${ time() }</div>
              <div class="message__text">${ answers[randoomIndex] }</div>
          </div>
          <div class="message message_client">
              <div class="message__time">${ time() }</div>
              <div class="message__text">${ input.value }</div>
          </div>
      `;
  }
})

input.onchange = () => {
  input.value = "";
  const wid = document.querySelector(".chat-widget__messages-container")
  wid.scrollTop = wid.scrollHeight;
}

input.onfocus = () => {
  console.log("focus")
}