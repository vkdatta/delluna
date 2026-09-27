export const name="battery_android_share-fill";
export const id="dl_4c057f629b2f689c2b10";
export const url=new URL("../icons/battery_android_share-fill.svg?v=4c7676a5e315ed593d46855ebe153a3f273962d23c6cee355efc0605488973d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
