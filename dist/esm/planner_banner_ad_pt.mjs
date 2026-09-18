export const name="planner_banner_ad_pt";
export const id="dl_3f398839d8da48cdb017";
export const url=new URL("../icons/P/planner_banner_ad_pt.svg?v=cb2ccd0113da9344775fdb12ddba603d71e8c0dc32e73c615b1ef1d29c678239",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
