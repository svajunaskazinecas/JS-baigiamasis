document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("id");
  const container = document.getElementById("item-details");

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
      price.textContent = item.Price;
      card.appendChild(price);

      const description = document.createElement("p");
      description.textContent = item.Description;
      card.appendChild(description);

      const city = document.createElement("p");
      city.textContent = item.City;
      card.append(city);

      container.appendChild(card);
    })
    .catch((error) => {
      console.error("Error fetching item:", error);
    });
});
