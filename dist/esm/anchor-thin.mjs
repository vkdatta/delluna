export const name="anchor-thin";
export const id="dl_cdabf429e48e4b32af37";
export const url=new URL("../icons/anchor-thin.svg?v=0816c2c003c9301281e71c15c675edde337c6c7b43cda7db9e2ebd4ac3639c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
