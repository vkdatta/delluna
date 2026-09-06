export const name="van";
export const id="dl_0669eac682c7431599db";
export const url=new URL("../icons/van.svg?v=c09ee294d2fc3c89c5878d0665e5efd1db6e495c3a40b47a4a318d81831c219b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
