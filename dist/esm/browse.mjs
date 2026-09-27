export const name="browse";
export const id="dl_1448e0e8b54b712b1eeb";
export const url=new URL("../icons/browse.svg?v=7a4d132abe57b0e4be83de8171a22a0e911ed7e96bbf1fa1254f711f0814464c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
