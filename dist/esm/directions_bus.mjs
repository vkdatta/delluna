export const name="directions_bus";
export const id="dl_3a9d194ab9f103183b0f";
export const url=new URL("../icons/directions_bus.svg?v=72cf0ed4109a4a4e9b3f1ca0b9cf99abc3b92c8150dbb34a82216b795a0b3e7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
