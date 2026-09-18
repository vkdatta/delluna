export const name="water_ph-fill";
export const id="dl_6c458deefbeb49b5af7e";
export const url=new URL("../icons/water_ph-fill.svg?v=efe7618c37244254a2cd4ce0f0f2c15625c15e781c5580a7be12009847795c5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
