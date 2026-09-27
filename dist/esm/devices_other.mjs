export const name="devices_other";
export const id="dl_b1bfed4fb474cd63fa85";
export const url=new URL("../icons/devices_other.svg?v=a199f0ed560e8ceca4e6b84572425cbf473c4ee069953890e3e1308a2c6fb97c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
