export const name="battery_android_0-fill";
export const id="dl_ee6f22bf051ec53f61e7";
export const url=new URL("../icons/battery_android_0-fill.svg?v=e36ee2169b42260950a3639317cc474d687b2b2b7a953e5055d9f494fb33f737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
