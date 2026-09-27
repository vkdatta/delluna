export const name="ruler";
export const id="dl_fe9b218c386d49f0b1f3";
export const url=new URL("../icons/ruler.svg?v=424705a2d692281242142097db2e0d4bac1296728956373a0d214a0ff935d6fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
