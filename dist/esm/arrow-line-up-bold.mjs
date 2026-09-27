export const name="arrow-line-up-bold";
export const id="dl_946916d6bb27459f9a4f";
export const url=new URL("../icons/arrow-line-up-bold.svg?v=a225e4961e1b0ff9f63566f270dcd7d424500f5086ba2f8a83aaf5c0b068edf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
