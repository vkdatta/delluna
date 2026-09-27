export const name="battery_android_full-fill";
export const id="dl_88cf21f846f31d2f8831";
export const url=new URL("../icons/battery_android_full-fill.svg?v=3af1e1a4f3b38b979a6ee81384552283feebe47336d52e900aab24c6fe9ff2b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
