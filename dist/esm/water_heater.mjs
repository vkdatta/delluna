export const name="water_heater";
export const id="dl_805db0884c8a25dcfceb";
export const url=new URL("../icons/water_heater.svg?v=28a5d6040502638809036daa4f5acb3afec684b02fb7393624e51e4b00e23594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
