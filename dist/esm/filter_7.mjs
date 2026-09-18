export const name="filter_7";
export const id="dl_5285c07cc0434bbfab41";
export const url=new URL("../icons/filter_7.svg?v=c91277da0e1dfefd19227a247498f2607098a6ebf8275be80257e4157c685f0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
