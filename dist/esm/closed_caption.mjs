export const name="closed_caption";
export const id="dl_4ddd3bded3c6481f8afc";
export const url=new URL("../icons/C/closed_caption.svg?v=bbd5b096a4725036f15828ab2e8da6faf842a238e43ae5c816f00c8bac171eb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
