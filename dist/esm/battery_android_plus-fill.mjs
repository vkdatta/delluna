export const name="battery_android_plus-fill";
export const id="dl_21bdcae92606f0a706b6";
export const url=new URL("../icons/battery_android_plus-fill.svg?v=c104b496dca2abf179b1a1a071955c3ec711fff6817262dfd499b9c28235b71c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
