export const name="planner_banner_ad_pt-fill";
export const id="dl_15a555150565e98cda91";
export const url=new URL("../icons/planner_banner_ad_pt-fill.svg?v=3a2e9b4c5496f45d7fad8f47145f606094b06aad3e2d8a47da8791aa140a31b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
