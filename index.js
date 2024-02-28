fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("ERRORE DATI");
    }
  })

  .then((userData) => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      if (index < userData.length) {
        card.children[0].setAttribute("src", userData[index].img);

        card.children[1].children[0].textContent = userData[index].title;
        card.children[1].children[1].textContent = userData[index].price + "$";
      } else {
        console.log("Immagini finite");
      }
    });
  })

  .catch((error) => console.log(error));
