export const name="battery_android_4-fill";
export const id="dl_939883ad0e174971af60";
export const url=new URL("../icons/B/battery_android_4-fill.svg?v=e3cb8c27bb6507d63a5b1887bedd46e02488847d3dc01cd2e2c4934a11cf8564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
