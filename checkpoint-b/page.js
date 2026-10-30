
import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");

  ul.innerHTML = "";

  for (const item of list) {
    const li = document.createElement("li");

    li.classList.add("listing");
    li.textContent = item.name;

    ul.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.category === "kitchen");
}

export function start() {
  renderItems(items);

  document.querySelector("#shortlist").addEventListener("click", () => {
    renderItems(matching());
  });
}

