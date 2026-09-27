export const name="water_pump-fill";
export const id="dl_5b23f81bac69e6d68c58";
export const url=new URL("../icons/water_pump-fill.svg?v=731d5871a15f92a6cfa38692e0936488f16e039d9e18ffaf0573ef4794b64b06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
