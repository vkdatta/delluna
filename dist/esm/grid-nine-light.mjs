export const name="grid-nine-light";
export const id="dl_723ad0843497428187a1";
export const url=new URL("../icons/grid-nine-light.svg?v=d22c2f06a9037f5ce057df4aac61b226cbf20f76ce0bb2907fe9e36a2b2bde5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
