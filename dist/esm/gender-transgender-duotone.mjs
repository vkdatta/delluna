export const name="gender-transgender-duotone";
export const id="dl_4a75d54f9d2149deb573";
export const url=new URL("../icons/gender-transgender-duotone.svg?v=2b9c0d7d9cfcc7786cd1c9f0af5887707d3d660150f7bc279566f0f10c4b58d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
