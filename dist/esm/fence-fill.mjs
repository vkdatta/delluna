export const name="fence-fill";
export const id="dl_be1e7a125f5ded89f35c";
export const url=new URL("../icons/fence-fill.svg?v=4f98a67eb35c3260af88f342aa9c9529f9be10dc23ad3d54bdb854f6e766b8cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
