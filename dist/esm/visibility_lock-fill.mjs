export const name="visibility_lock-fill";
export const id="dl_25150c1eba133c93cefe";
export const url=new URL("../icons/visibility_lock-fill.svg?v=37f70382f29feda2fd1d40cd9ee024f73b72a297eb31e27adb2d81181604d7c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
