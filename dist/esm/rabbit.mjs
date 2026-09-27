export const name="rabbit";
export const id="dl_dcaea3bce9054f5bb3ad";
export const url=new URL("../icons/rabbit.svg?v=2bedf7b0e027eb9afe2263d595572069a3778b9bc98b8e926f32f2db45c739d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
