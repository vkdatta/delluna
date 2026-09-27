export const name="planner_banner_ad_pt";
export const id="dl_aaf7245602c6d8b63554";
export const url=new URL("../icons/planner_banner_ad_pt.svg?v=d4d27f34c0335d1d63a34a0b5b01cd47e9cb1de54fbdd69c4dbbd8ff74c07ce3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
