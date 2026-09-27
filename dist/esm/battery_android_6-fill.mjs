export const name="battery_android_6-fill";
export const id="dl_92cdec4f63d50e67c14b";
export const url=new URL("../icons/battery_android_6-fill.svg?v=32d5052d1bc85adf8d05e5d769ba46c1aea9def8246ea70eba3aae3b551ae8d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
