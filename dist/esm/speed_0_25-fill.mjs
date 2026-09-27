export const name="speed_0_25-fill";
export const id="dl_3f97e5d19cd79329da99";
export const url=new URL("../icons/speed_0_25-fill.svg?v=963fd6dc2c14cf506f99a75e05feca467a8d8be756c20687f0b0b9175cb5f723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
