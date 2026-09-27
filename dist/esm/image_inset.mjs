export const name="image_inset";
export const id="dl_7a52f76c5f0c9fe4e1a0";
export const url=new URL("../icons/image_inset.svg?v=2fe121c9ea67e7a80688d604b5603aab861e20c64ed97850905017d103df31c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
