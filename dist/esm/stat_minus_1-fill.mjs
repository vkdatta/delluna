export const name="stat_minus_1-fill";
export const id="dl_28a0b0e41bc7b3ecf2d6";
export const url=new URL("../icons/stat_minus_1-fill.svg?v=6cbf9c26c334fddf9fbd7415c64d908bfef1748ce430f1812344b6a6fe2d50b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
