export const createHeaderTemplate = (header) => {
    return `
    <h1 class="top__header">
      ${header}
    </h1>
  `;
};
export const createBlogItemLargeTemplate = ({ image:{src, alt}, text, header }) => {
    return `
    <div class="blog__item__large">
        <div class="image">
          <img src="${src}" alt="${alt}">
        </div>
        <div class="text">
          <p class="p text__blog">${text}</p>
          <h3 class="h3 big__text__blog">${header}</h3>
        </div>
        <div class="bottom__text">
          <a class="a text__blog" href="#">Читать полную статью</a>
        </div>
    </div>
`;
};

export const createBlogSmallTemplate = ({ image:{src, alt}, text, header }) => {
    return `
    <div class="blog__small">
        <div class="image">
          <img src="${src}" alt="${alt}">
        </div>
        <div class="text">
          <p class="p text__blog">${text}</p>
          <h3 class="h3 big__text__blog">${header}</h3>
        </div>
        <div class="bottom__text">
          <a class="a text__blog" href="#">Читать полную статью</a>
        </div>
    </div>
`;
};

export const createBlogItemTemplate = (blog__small) => {
    return blog__small
        .map((item) => createBlogSmallTemplate(item))
        .join("");
};

export const happensBlogTemplate = ({
  header,
  blog__item__large,
  blog__small,
}) => {
    const headerTemplate = createHeaderTemplate(header);
    const blogItemLargeTemplate = createBlogItemLargeTemplate(blog__item__large);
    const blogSmallTemplate = createBlogItemTemplate(blog__small);

    return `
        <div class="text__block">
          ${headerTemplate}
        </div>
        <div class="blog__block">
          ${blogItemLargeTemplate}
          <div class="blog__item">
            ${blogSmallTemplate}
          </div>
        </div>
    `;
};