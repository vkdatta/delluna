export const name="flower-tulip-fill";
export const id="dl_26eb6308c14f4683a24d";
export const url=new URL("../icons/flower-tulip-fill.svg?v=76a65b790df2646b1f4813a5461bf01e4c98f6f04f2f2657e51e0706f17d3962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
