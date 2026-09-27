export const name="pinboard-fill";
export const id="dl_2d62d6a7df179f798b63";
export const url=new URL("../icons/pinboard-fill.svg?v=f5ba442a078783c12cbae08ac5bec1b959b931172e4cad74220c410766de0301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
