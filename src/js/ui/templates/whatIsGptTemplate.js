export const createWhatIsGptTopTemplate = ({ header, content }) => {
    return `
        <h3 class="top__header lined_header">
            ${header}
        </h3>
        <p class="top__content">
            ${content}
        </p>
    `;
};

export const createWhatIsGptMiddleTemplate = ({
  header,
  button: { href, title },
}) => {
    return `
        <h2 class="middle__header">
            ${header}
        </h2>
        <a href="${href}" class="middle_cta">${title}</a>
    `;
};

export const createWhatIsGptContainerTemplate = ({ header, content }) => {
  return `
    <div class="bottom__container">
        <h3 class="container__header lined_header">${header}</h3>
        <p class="container__content">
            ${content}
        </p>
    </div>
    `;
};

export const createWhatIsGptBottomTemplate = (whatIsGptBottomData) => {
    return whatIsGptBottomData
      .map((item) => createWhatIsGptContainerTemplate(item))
      .join("");
};

export const whatIsGptTemplate = ({
  whatIsGptTopData,
  whatIsGptMiddleData,
  whatIsGptBottomData,
}) => {
  const whatIsGptTopTemplate = createWhatIsGptTopTemplate(whatIsGptTopData);
  const whatIsGptMiddleTemplate =
    createWhatIsGptMiddleTemplate(whatIsGptMiddleData);
  const whatIsGptBottomTemplate =
    createWhatIsGptBottomTemplate(whatIsGptBottomData);

  return `
        <div class="what_is_chatgpt_section__top">
           ${whatIsGptTopTemplate}
        </div>
        <div class="what_is_chatgpt_section__middle">
           ${whatIsGptMiddleTemplate}
        </div>
        <div class="what_is_chatgpt_section__bottom">
           ${whatIsGptBottomTemplate}
        </div>
    `;
};
