export const name="planner_banner_ad_pt-fill";
export const id="dl_6e76a47bf691394e265b";
export const url=new URL("../icons/planner_banner_ad_pt-fill.svg?v=4c48366cb0a26c7302b313aa2df256af04a83cff0f55e7f8219ea2d1715862c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
