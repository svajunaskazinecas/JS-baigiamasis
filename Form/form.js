function addItem() {
  window.location.href = "form.html";
}
function home() {
  window.location.href = "../index/index.html";
}

const mainBtn = document.querySelector(".main-btn");
mainBtn.addEventListener("click", function () {
  window.location.href = "../index/index.html";
});

function postData(event) {
  event.preventDefault();

  const mainBtnWrapper = document.querySelector(".main-btn-wrapper");
  const succes = document.createElement("h3");
  succes.classList.add("succes");
  succes.textContent = "Sėkmingai patalpinta!";

  const marke = document.getElementById("marke").value;
  const kaina = document.getElementById("kaina").value;
  const nuotraukosUrl = document.getElementById("nuotraukosUrl").value;
  const aprasymas = document.getElementById("aprasymas").value;
  const miestas = document.getElementById("miestas").value;

  const urlPattern =
    /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[^\s]*)?$/;

  if (!urlPattern.test(nuotraukosUrl)) {
    alert("Neteisingas URL formatas. Įveskite teisingą URL.");
    return;
  }

  if (isNaN(kaina) || kaina === "") {
    alert("Neteisinga kaina. Įveskite teisingą skaičių.");
    return;
  }

  const data = {
    Name: marke,
    Price: kaina,
    imgURL: nuotraukosUrl,
    Description: aprasymas,
    City: miestas,
  };

  fetch("https://66705de40900b5f8724a6395.mockapi.io/Items", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((result) => {
      console.log("Success:", result);
      mainBtnWrapper.append(succes);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Klaida įkeliant duomenis");
    });
}
