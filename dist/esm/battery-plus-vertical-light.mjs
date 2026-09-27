export const name="battery-plus-vertical-light";
export const id="dl_df7c010544bc4058834c";
export const url=new URL("../icons/battery-plus-vertical-light.svg?v=f16046d8f489eb879106ec701ff1779e27a241ad29b4f2cf8e8ff4d2a803f262",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
