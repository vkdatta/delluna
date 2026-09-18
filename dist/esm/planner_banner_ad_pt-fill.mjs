export const name="planner_banner_ad_pt-fill";
export const id="dl_4dad4d50db8548e49dd6";
export const url=new URL("../icons/P/planner_banner_ad_pt-fill.svg?v=75a18addd4a4ff2cb4592847da325ef15ab41915154e8c4106842aaacb9e1009",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
