export const name="battery_charging_60-fill";
export const id="dl_786f3ac58ebe665bfc8a";
export const url=new URL("../icons/battery_charging_60-fill.svg?v=78a6f80441f090b38c6409bebab4e662b0e584bb34c5fd20e684853686869626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
