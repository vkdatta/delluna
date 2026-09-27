export const name="lucid_2-ice-cream-bowl";
export const id="dl_71920e4cc81247d99b2a";
export const url=new URL("../icons/lucid_2-ice-cream-bowl.svg?v=c5c9770bfa4571bdabf5436200f0f73cdec32a896ff556879ad9b3f5a2c6e21b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
