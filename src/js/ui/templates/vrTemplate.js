export const createWomanImageTemplate = ({ src, alt }) => {
    return `
    <img src="${src}" alt="${alt}" />
  `;
};

export const createTextTemplate=(text)=> {
    return `
    <p class="blue__text">
      ${text}
    </p>
  `;
};

export const createHeaderTemplate = (header) => {
    return `
    <h2 class="right__header">
      ${header}
    </h2>
  `;
};

export const createContentTemplate=(content)=> {
    return `
    <p class="container__content">
      ${content}
    </p>
  `;
};

export const vrTemplate = ({
  womanImage,
  text,
  header,
  content,
}) => {
    const womanImageTemplate = createWomanImageTemplate(womanImage);
    const textTemplate = createTextTemplate(text);
    const headerTemplate = createHeaderTemplate(header);
    const contentTemplate = createContentTemplate(content);

    return `
        <div class="vr_left">
            ${womanImageTemplate}
        </div>
        <div class="vr_right">
          ${textTemplate}
          ${headerTemplate}
          ${contentTemplate}
          <a href="#" class="right__cta">Запросить ранний доступ</a>
        </div>
        `;
};