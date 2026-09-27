export const name="salinity";
export const id="dl_3a044ed421c0ed7050a6";
export const url=new URL("../icons/salinity.svg?v=2f049dc5585f82d16b8a327b704f4f75734196e9a959e55cdb5d656bf6d4d387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
