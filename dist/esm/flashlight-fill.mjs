export const name="flashlight-fill";
export const id="dl_b375f4d372f74a51abca";
export const url=new URL("../icons/flashlight-fill.svg?v=29cac1be2ed4e9d059e6f0119c883beee98961e99ab1d3194f1413a5dda6f3bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
