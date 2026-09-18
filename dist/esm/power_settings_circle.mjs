export const name="power_settings_circle";
export const id="dl_85d83a1db2184f499e9f";
export const url=new URL("../icons/power_settings_circle.svg?v=5699b4d01965540186c10cdd88db76bfcc44472c52dcfda7e2c39ed78bd42eb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
