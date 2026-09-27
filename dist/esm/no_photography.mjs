export const name="no_photography";
export const id="dl_a5c1e7fac96301ba3b9f";
export const url=new URL("../icons/no_photography.svg?v=cfff53c90ab8b053897ac1c591ad349f3c8ea687a0f044c58186a9f163f6b2b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
