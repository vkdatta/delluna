export const name="mobile_tap-fill";
export const id="dl_357a73e57ba24a5cbccd";
export const url=new URL("../icons/mobile_tap-fill.svg?v=e97f6eecfab78a9817e22c72b14885cf0fb0df7adbee2c6b0fed4adf1594971e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
