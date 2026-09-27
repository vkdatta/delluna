export const name="router-fill";
export const id="dl_afdc6150066869aefd4a";
export const url=new URL("../icons/router-fill.svg?v=15bd67439f0838c2b49a6171ba5870535b497ff19d76181d96fac719d4a47472",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
