export const name="battery_android_frame_share-fill";
export const id="dl_2ed1782d8afed5fb7d45";
export const url=new URL("../icons/battery_android_frame_share-fill.svg?v=a1607664ad78908e7e412c38416cc4fc45717647c232e914e32ab23df7e92d02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
