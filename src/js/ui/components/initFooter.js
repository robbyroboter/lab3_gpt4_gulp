import {footerTemplate} from "../templates/footerTemplate.js";
import footerData from "../../mockData/footerData.js";

const initFooter = (footerNode) => {
    footerNode.insertAdjacentHTML(
        "beforeend",
        footerTemplate(footerData)
    );
};

export default initFooter;
