export const name="floppy-disk-light";
export const id="dl_e4d79cf716a74462937c";
export const url=new URL("../icons/floppy-disk-light.svg?v=12abe10b1aa13dd12cdb1f43c8bbed2b856dc18941fab7c7a2a5ad2d5c4cfa3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
