export const name="open_run-fill";
export const id="dl_d90f03dd142243a1a12a";
export const url=new URL("../icons/O/open_run-fill.svg?v=7c7ed17503c95d5a8c1125426f2d3aeb9d09390e548a751bdaee7d0c58581896",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
