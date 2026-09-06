export const name="cell-signal-full-duotone";
export const id="dl_3aef8aa5101745828bbc";
export const url=new URL("../icons/cell-signal-full-duotone.svg?v=75c40c5048bb0b8947c5e40e129950eea3a67fb5bff39eff03bfe2dfeb3a6243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
