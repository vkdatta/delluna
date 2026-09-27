export const name="south_america-fill";
export const id="dl_fe74b0b75e1e74f73dfc";
export const url=new URL("../icons/south_america-fill.svg?v=3afd6c5d289436491b9a82a2ad90f35c8a397a80004f6d46192b098be375a4e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
