export const name="closed-captioning-light";
export const id="dl_ff44a8bcacd74fe5af61";
export const url=new URL("../icons/closed-captioning-light.svg?v=2fa134b919184441b8fc809507e05a7072bb44c2c6623fd0bb060faef171482e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
