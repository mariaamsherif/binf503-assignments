
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");

  list.innerHTML = "";

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceTag = document.createElement("p");
    priceTag.classList.add("price");
    priceTag.textContent = `${item.price} EGP`;

    card.append(heading, priceTag);
    list.append(card);
  }
}

export function wireForm() {
  const items = [];

  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const product = readForm();

    if (!product.name) {
      error.textContent = "Give the product a name.";
      return;
    }

    if (!(product.price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";

    items.push(product);

    renderList(items);

    clearForm();
  });
}
