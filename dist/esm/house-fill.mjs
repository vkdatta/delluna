export const name="house-fill";
export const id="dl_fb666a380c434d138094";
export const url=new URL("../icons/house-fill.svg?v=4783cdf0ae5f5ec363df6f77167a41642aac42fe8d73251b9a61232ab43f355d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
