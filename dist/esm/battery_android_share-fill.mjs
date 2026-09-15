export const name="battery_android_share-fill";
export const id="dl_3862222b369c4ebd9ce8";
export const url=new URL("../icons/B/battery_android_share-fill.svg?v=4c7676a5e315ed593d46855ebe153a3f273962d23c6cee355efc0605488973d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
