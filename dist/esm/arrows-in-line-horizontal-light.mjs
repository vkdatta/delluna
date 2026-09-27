export const name="arrows-in-line-horizontal-light";
export const id="dl_630dc3cc35a54d2c9351";
export const url=new URL("../icons/arrows-in-line-horizontal-light.svg?v=8c4420fe1f1fb7663d49eac14d12f5d14d6ce002952e533f3d63a6a5903025b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
