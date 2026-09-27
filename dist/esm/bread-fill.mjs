export const name="bread-fill";
export const id="dl_ec64ecb7e50c406db79f";
export const url=new URL("../icons/bread-fill.svg?v=29e6ee82bab391094f72efaf5a14f681fb940987501775b5468d6dbe54008c39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
