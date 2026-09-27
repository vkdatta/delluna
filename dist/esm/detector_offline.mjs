export const name="detector_offline";
export const id="dl_9e06b8ce544682f7e53d";
export const url=new URL("../icons/detector_offline.svg?v=bcc37324d06b56390444d7c507835be900a959e09c053ca54b37693282c6b90d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
