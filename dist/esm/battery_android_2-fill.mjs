export const name="battery_android_2-fill";
export const id="dl_55e5437776dd41ad8279";
export const url=new URL("../icons/battery_android_2-fill.svg?v=eb846aba4da273bfb1ace2b06d5d5e6ccd2e5c87e85cff5f5fa9c1513b098550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
