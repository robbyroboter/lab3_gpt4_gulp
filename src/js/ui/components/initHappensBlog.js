import {happensBlogTemplate} from "../templates/happensBlogTemplate.js";
import happensBlogData from "../../mockData/happensBlogData.js";

const initHappensBlog=(happensBlogNode)=>{
    happensBlogNode.insertAdjacentHTML(
        "beforeend",
        happensBlogTemplate(happensBlogData)
    )
}
export default initHappensBlog;