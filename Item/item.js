document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("id");
  const container = document.getElementById("item-details");
  const btnWrapper = document.getElementById("btn-wrapper");

  fetch(`https://66705de40900b5f8724a6395.mockapi.io/Items/${itemId}`)
    .then((response) => {
      return response.json();
    })
    .then((item) => {
      console.log(item);

      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = item.imgURL;
      card.appendChild(img);

      const name = document.createElement("h3");
      name.textContent = item.Name;
      card.appendChild(name);

      const price = document.createElement("p");
      price.textContent = item.Price + "$";
      price.classList.add("price");
      card.appendChild(price);

      const description = document.createElement("p");
      description.textContent = item.Description;
      description.classList.add("description");
      card.appendChild(description);

      const city = document.createElement("p");
      city.textContent = item.City;
      city.classList.add("city");
      card.append(city);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Ištrinti";
      deleteBtn.classList.add("delete-btn");
      btnWrapper.append(deleteBtn);
      deleteBtn.addEventListener("click", function () {
        if (confirm("Ar tikrai norite ištrinti?")) {
          deleteItem(itemId);
        }
      });

      const mainBtn = document.createElement("button");
      mainBtn.textContent = "Grįžti";
      mainBtn.classList.add("main-btn");
      btnWrapper.append(mainBtn);
      mainBtn.addEventListener("click", function () {
        window.location.href = "../index/index.html";
      });

      container.appendChild(card);
    })
    .catch((error) => {
      console.error("Error fetching item:", error);
    });
});

function deleteItem(itemId) {
  fetch(`https://66705de40900b5f8724a6395.mockapi.io/Items/${itemId}`, {
    method: "DELETE",
  })
    .then((response) => {
      alert("Sėkmingai ištrinta!");
      window.location.href = "../index/index.html";
    })
    .catch((error) => {
      console.error("Error deleting item:", error);
    });
}
function addItem() {
  window.location.href = "../form/form.html";
}
function home() {
  window.location.href = "../index/index.html";
}
