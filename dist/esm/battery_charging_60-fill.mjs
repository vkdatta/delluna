export const name="battery_charging_60-fill";
export const id="dl_55dda160bc6346c49e23";
export const url=new URL("../icons/battery_charging_60-fill.svg?v=c4fa8cd1b30b0bae0a9457cb75741a6e164e6e62151a9fe4719c64b64fcd5c98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
