export const name="add_2-fill";
export const id="dl_92549796cec357e9407f";
export const url=new URL("../icons/add_2-fill.svg?v=1fcc8bc43089e5dcdc2dc9c9ac79a88b40e5cc9f0cd7bb870bd65d2216a351b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
