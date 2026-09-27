export const name="hardware";
export const id="dl_2dd9adc2a16edde40492";
export const url=new URL("../icons/hardware.svg?v=757b9ed32aab487d5d4dd356d9088a7a10d6a07194f2c95744d35bf428876a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
