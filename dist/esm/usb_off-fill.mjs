export const name="usb_off-fill";
export const id="dl_869690159971aaa7590d";
export const url=new URL("../icons/usb_off-fill.svg?v=d02bf838eae9711c4b81b4cfbe465fa6be585d42b7497f8aa449653cd662c225",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
