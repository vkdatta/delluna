export const name="wifi-high-fill";
export const id="dl_bfece5f19bcd46ef9d19";
export const url=new URL("../icons/W/wifi-high-fill.svg?v=d966516341d6e973e7dac9b0885cc905dcbf97f86290b0b6c65791d1206669e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
