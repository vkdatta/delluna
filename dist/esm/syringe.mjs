export const name="syringe";
export const id="dl_3b9e7065b3fa8167df8b";
export const url=new URL("../icons/syringe.svg?v=47d270af1ff533d67b33f4a5d2a7ac2d43a9fb5c1d07304daf3d6022c2182157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
