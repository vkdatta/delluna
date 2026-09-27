export const name="nest_farsight_eco-fill";
export const id="dl_a383223eed34d0507775";
export const url=new URL("../icons/nest_farsight_eco-fill.svg?v=9c5e9701970ef4d88520a642a7ffb5bd05d60a858daeb8da2072a6e4f7d62869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
