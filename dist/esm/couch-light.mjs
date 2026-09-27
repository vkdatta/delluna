export const name="couch-light";
export const id="dl_b07c00b4b315423897eb";
export const url=new URL("../icons/couch-light.svg?v=f992a801f1bd8d64ce5dc9b9b63ef5cd1e2177c80147d9efaa859ceeb2b96079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
