import {happensBlogTemplate} from "../templates/happensBlogTemplate.js";
import happens_blog from "../../mockData/happens_blog.js";

const initHappensBlog=(happensBlogNode)=>{
    happensBlogNode.insertAdjacentHTML(
        "beforeend",
        happensBlogTemplate(happens_blog)
    )
}
export default initHappensBlog;