export const name="lucid_3-microchip";
export const id="dl_f00b4621fa274a9481b0";
export const url=new URL("../icons/lucid_3-microchip.svg?v=ad0bb543c8eeeddb37dade7c61dc816d49ab24d701a361b049a2fd56f0fc5697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
