import AbstractComponent from "./abstract-component.js";

const createSortTemplate = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
     </ul>`
  );
};

class MovieSort extends AbstractComponent {
  getTemplate() {
    return createSortTemplate();
  }
}

export {MovieSort as default};
