export function CharacterCard(src, name, status) {
  const cardContainer = document.querySelector("[data-js='card-container']");
  cardContainer.classList.add("card-container");

  const cardList = document.createElement("li");
  cardList.classList.add("card");

  cardList.innerHTML = `
          <div class="card__image-container">
            <img
              class="card__image"
              src=${src}
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">${status}</dt>
              <dd class="card__info-description">Alive</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description"></dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">51</dd>
            </dl>
          </div>

    `;
  cardContainer.append(cardList);
  return cardList;
}

// https://rickandmortyapi.com/api/character
