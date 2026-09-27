export const name="planner_banner_ad_pt-fill";
export const id="dl_78f968f1999f1bed38a2";
export const url=new URL("../icons/planner_banner_ad_pt-fill.svg?v=77a6ff80565a2f901a4e1705378dd5d4993edb9531d5365ce77ad7bb9a8fd00f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
