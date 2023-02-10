//animation of the share button
const shareBtn = document.querySelector(".share-btn");
const shareOptions = document.querySelector(".share-options");

shareBtn.addEventListener("click", () => {
  shareOptions.classList.toggle("active");
});

//copy to clipboard
function copyFunction() {
  const copyText = document.getElementById("myInput").textContent;
  const textArea = document.createElement("textarea");
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  cpylink.innerText = "link copied";
  textArea.remove();
}
document.getElementById("cpylink").addEventListener("click", copyFunction);
