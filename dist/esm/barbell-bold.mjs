export const name="barbell-bold";
export const id="dl_fa8454f9a2a4424989d3";
export const url=new URL("../icons/barbell-bold.svg?v=afae9541c7f5b0f362a81d6f7a6518a25dc9bf96aa61079ad08dc4bbf5317b94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
