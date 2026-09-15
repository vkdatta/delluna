export const name="battery_android_bolt";
export const id="dl_85bec26be7bf4372a82b";
export const url=new URL("../icons/B/battery_android_bolt.svg?v=382928f850d61db91d19cae0c807f13d92421f5dcd8ca50fad570527c571615f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
