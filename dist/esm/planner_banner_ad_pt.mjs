export const name="planner_banner_ad_pt";
export const id="dl_38e6152a05ace85149d3";
export const url=new URL("../icons/planner_banner_ad_pt.svg?v=f2f7f2fd198d102ac3879fc086588da73b1d6e8f5011bf2c48b7b7a7bba55c2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
