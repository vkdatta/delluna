export const name="champagne-light";
export const id="dl_4f7303904c5c404ea9f9";
export const url=new URL("../icons/champagne-light.svg?v=f806c8718f1817f9ae29ca8c64aa0c7d65d5cbe9fb8d79fe80c527f0b7f1628c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
