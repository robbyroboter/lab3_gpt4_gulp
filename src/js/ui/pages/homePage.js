import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initVr from "../components/initVr.js";
import initPurple from "../components/initPurple.js";
import initHappensBlog from "../components/initHappensBlog.js";
import initFooter from "../components/initFooter.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section vr"></section>
    <section class="section purple"></section>
    <section class="section happens_blog"></section>
    <section class="section footer"></section>
    <section class="section copyright">
        <div class="copyright__text">
          © 2023 GPT-3. Все права защищены.
        </div>
      </section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  const vrNode = rootNode.querySelector(".vr");
  initVr(vrNode);

  const purpleNode=rootNode.querySelector(".purple")
  initPurple(purpleNode)

  const happensBlogNode=rootNode.querySelector(".happens_blog")
  initHappensBlog(happensBlogNode)

  const footerNode=rootNode.querySelector(".footer")
  initFooter(footerNode)

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
