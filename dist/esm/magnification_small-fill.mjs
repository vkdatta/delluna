export const name="magnification_small-fill";
export const id="dl_c04d8baf8d62fd7465fe";
export const url=new URL("../icons/magnification_small-fill.svg?v=8710b1728434fd4093ba0c15ef9a67950c80832e0b5e6e848702a8096a044bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
