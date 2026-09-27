export const name="file-c-duotone";
export const id="dl_d2ca261b958d48ee95f9";
export const url=new URL("../icons/file-c-duotone.svg?v=5f6a4c2d7849713772dd756806eea2219cf191557980227843c3ad9189ed4fdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
