export const name="battery_android_plus-fill";
export const id="dl_1a32189ea17a587da3fd";
export const url=new URL("../icons/battery_android_plus-fill.svg?v=c3e3a62df09995dda70bb5def16ff15ed588e498e378ef7b1c797bfa87d333e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
