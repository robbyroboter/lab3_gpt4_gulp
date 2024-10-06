export const createHeaderTemplate = (header) => {
    return `
    <h1>
      ${header}
    </h1>
  `;
};

export const createButtonsTemplate=({ type, title })=> {
    switch (type) {
        case "button":
            return `
              <button class="cta_buttons__signin btn footer-button">
                ${title}
              </button>
            `;

        default:
            return ``;
    }
};

export const createImageTemplate = ({ src, alt }) => {
    return `
    <img src="${src}" alt="${alt}" />
  `;
};

export const createGpt3Template = ({text}) => {
    return `
    <div class="external__text">
        ${text}
    </div>
    `;
};

export const createSsilkiTemplate=({href,title})=>{
    return `
    <div class="external__text">
        <a href="${href}">${title}</a>
    </div>
    `;
}

export const createCompanyTemplate=({href,title})=>{
    return `
    <div class="external__text">
        <a href="${href}">${title}</a>
    </div>
    `;
}

export const createContactsTemplate = ({text}) => {
    return `
    <div class="external__text">
        ${text}
    </div>
    `;
};

export const createRealGpt3Template = (gpt3) => {
    return gpt3
        .map((item) => createGpt3Template(item))
        .join("");
};

export const createRealSsilkiTemplate = (ssilki) => {
    return ssilki
        .map((item) => createSsilkiTemplate(item))
        .join("");
};

export const createRealCompanyTemplate = (company) => {
    return company
        .map((item) => createCompanyTemplate(item))
        .join("");
};

export const createRealContactsTemplate = (contacts) => {
    return contacts
        .map((item) => createContactsTemplate(item))
        .join("");
};

export const createCopyrightTemplate = (copyrightText) => {
    return `
    <div class="copyright__text">
        ${copyrightText}
    </div>
  `;
};

export const footerTemplate = ({
    header,
    footerCtaButtons,
    image,
    gpt3,
    ssilki,
    company,
    contacts,
    copyrightText,
}) => {
    const headerTemplate = createHeaderTemplate(header);
    const footerCtaButtonsTemplate = createButtonsTemplate(footerCtaButtons);
    const imageTemplate = createImageTemplate(image);
    const gpt3Template=createRealGpt3Template(gpt3)
    const ssilkiTemplate=createRealSsilkiTemplate(ssilki)
    const companyTemplate=createRealCompanyTemplate(company)
    const contactsTemplate=createRealContactsTemplate(contacts)
    const copyrightTemplate = createCopyrightTemplate(copyrightText);

    return `
        <div class="future__step">
          <div class="big__text">
            ${headerTemplate}
          </div>
          <div class="nonback__button">
            ${footerCtaButtonsTemplate}
          </div>
        </div>
        <div class="info">
          <div class="gpt-3">
            <div class="GPT-3">
              ${imageTemplate}
            </div>
            ${gpt3Template}
          </div>
          <div class="ssilki">
            <div class="main__text">
              Ссылки
            </div>
            ${ssilkiTemplate}
          </div>
          <div class="company">
            <div class="main__text">
              Компания
            </div>
            ${companyTemplate}
          </div>
          <div class="contacts">
            <div class="main__text">
              Контакты
            </div>
            ${contactsTemplate}
          </div>
        </div>
        ${copyrightTemplate}
    `;
};