import {purpleTemplate} from "../templates/purpleTemplate.js";
import {purpleData} from "../../mockData/purpleData.js";

const initPurple = (purpleNode) => {
    purpleNode.insertAdjacentHTML("beforeend", purpleTemplate(purpleData));
};

export default initPurple;