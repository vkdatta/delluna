export const name="battery_android_bolt-fill";
export const id="dl_4987da9f7ee54502ab6e";
export const url=new URL("../icons/battery_android_bolt-fill.svg?v=bc08df451e13dd70a269934d8dbc20725828e5eb79551d9903bbaf0ee704850f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
