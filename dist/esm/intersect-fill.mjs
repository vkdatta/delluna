export const name="intersect-fill";
export const id="dl_18ebbde4f1314ff093b0";
export const url=new URL("../icons/intersect-fill.svg?v=8da2c1885eb312ebbff675adb6c0e9fce4b2c5c485238dcc8957b19fe2b32e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
