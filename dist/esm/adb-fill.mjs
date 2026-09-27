export const name="adb-fill";
export const id="dl_7614dbb8a8073adf5ab9";
export const url=new URL("../icons/adb-fill.svg?v=ca36a47c24fd0d265d2a7eaa744863f9d65c69ed1805229bee663a3aa169287b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
