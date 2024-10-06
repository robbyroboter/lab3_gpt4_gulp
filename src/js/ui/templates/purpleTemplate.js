import {createContentTemplate, createWomanImageTemplate} from "./vrTemplate.js";

export const createTextTemplate=(text)=> {
    return `
    <p class="small__text">
      ${text}
    </p>
  `;
};

export const createHeaderTemplate = (header) => {
    return `
    <h3 class="big__text">
      ${header}
    </h3>
  `;
};

export const createButtonsTemplate=({ type, title })=> {
    switch (type) {
        case "button":
            return `
              <button class="cta_buttons__signin btn semi-button">
                ${title}
              </button>
            `;

        default:
            return ``;
    }
};

export const purpleTemplate = ({
   text,
   header,
   purpleCtaButtons,
}) => {
    const textTemplate = createTextTemplate(text);
    const headerTemplate = createHeaderTemplate(header);
    const ctaButtonTemplate = createButtonsTemplate(purpleCtaButtons);

    return `
        <div class="text__block">
          ${textTemplate}
          ${headerTemplate}
        </div>
        <div class="button__block">
          ${ctaButtonTemplate}
        </div>
        `;
};