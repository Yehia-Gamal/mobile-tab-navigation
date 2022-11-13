let contents = document.querySelectorAll(".content");
let listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllItems();
    hideAllContents();

    item.classList.add('active')
    contents[idx].classList.add('show')
  });
});

function hideAllContents(element) {
  contents.forEach((content) => {
    content.classList.remove("show");
  });
}

function hideAllItems() {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
}
