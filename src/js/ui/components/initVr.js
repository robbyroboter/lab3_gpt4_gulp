import {vrTemplate} from "../templates/vrTemplate.js";
import {vrData} from "../../mockData/vrData.js";

const initVr=(vrNode)=>{
    vrNode.insertAdjacentHTML("beforeend", vrTemplate(vrData))
};

export default initVr;