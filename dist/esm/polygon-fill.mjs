export const name="polygon-fill";
export const id="dl_db88e50b0b2641478945";
export const url=new URL("../icons/polygon-fill.svg?v=390b136bd0d00c002c882706604a8de475050119d3181c8f0df3119ef413353e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
