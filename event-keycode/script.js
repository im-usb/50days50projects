const eventKey = document.getElementById("key");
const eventKeyCode = document.getElementById("key-code");
const eventCode = document.getElementById("event-code");

function onKeyPress(e) {
  //   const key = String(e.code);
  //   console.log(e);
  //   console.log(key);
  eventKey.value = e.key;
  eventKeyCode.value = e.keyCode;
  eventCode.value = e.code;
}

document.addEventListener("keypress", onKeyPress);
