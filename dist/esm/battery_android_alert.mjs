export const name="battery_android_alert";
export const id="dl_60149745cb6f6d2c1837";
export const url=new URL("../icons/battery_android_alert.svg?v=c217c7b08f298be25440454791aacc3be4126a86b75f21dd34751da69e68fcbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
