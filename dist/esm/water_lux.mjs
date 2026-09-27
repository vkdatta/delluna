export const name="water_lux";
export const id="dl_37822def2716f0423777";
export const url=new URL("../icons/water_lux.svg?v=8130e440d0a409e56a276630c1a11dbe341e41608eb4b3c8a408a131837bc36d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
