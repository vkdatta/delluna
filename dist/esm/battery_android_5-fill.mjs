export const name="battery_android_5-fill";
export const id="dl_76cff07064a1e8ca8832";
export const url=new URL("../icons/battery_android_5-fill.svg?v=cbae14de5ac4b11317cdcc4bbf81b10a65b5971fe6b9a066f5b58e69d9370e1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
