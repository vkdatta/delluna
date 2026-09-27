export const name="bath_private";
export const id="dl_1b5e03250b3d8e759c41";
export const url=new URL("../icons/bath_private.svg?v=0f0b1cdc4978d6f3a8cfe75402979178fd24e152009bb465323a13ab775fac9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
