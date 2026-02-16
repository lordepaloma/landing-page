const btn = document.querySelector("#cta");
const msg = document.querySelector("#message");

btn.addEventListener("click", () => {
  msg.textContent = "Thanks for clicking!";
});
