export const name="seal-percent-bold";
export const id="dl_b4097d99aa0d518f28d0";
export const url=new URL("../icons/seal-percent-bold.svg?v=2ff69ad3ab986bd47dae0bb78e7713598608b6c2f8c0a7cdc67aa293d39cf5fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
