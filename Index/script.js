document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cards-container");

  fetch("https://66705de40900b5f8724a6395.mockapi.io/Items")
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => a.Price - b.Price);

      data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.onclick = function () {
          window.location.href = `../Item/item.html?id=${item.id}`;
        };

        const img = document.createElement("img");
        img.src = item.imgURL;
        card.append(img);

        const name = document.createElement("h3");
        name.textContent = item.Name;
        card.append(name);

        const price = document.createElement("p");
        price.textContent = item.Price;
        card.append(price);

        container.append(card);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function addItem() {
  window.location.href = "../form/form.html";
}
function home() {
  window.location.href - "/index.html";
}
