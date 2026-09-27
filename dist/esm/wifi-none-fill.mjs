export const name="wifi-none-fill";
export const id="dl_1d1f3ed38e7399206f7d";
export const url=new URL("../icons/wifi-none-fill.svg?v=345e4db56ed43bb7fa10a2a2ca52317f5c9afdc912c12f9c20299db826412f53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
