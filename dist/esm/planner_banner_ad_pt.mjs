export const name="planner_banner_ad_pt";
export const id="dl_3fd9a3166ed43d153b6f";
export const url=new URL("../icons/planner_banner_ad_pt.svg?v=98d97d655ff05bd0c7c5df7dc5273da718713b4a3b7fefbcaa09861c2042f5cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
