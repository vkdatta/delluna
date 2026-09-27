export const name="arrow-elbow-right-up-duotone";
export const id="dl_447c8d4f9e68438494c8";
export const url=new URL("../icons/arrow-elbow-right-up-duotone.svg?v=d73d1e4f43f74f63e1454e67f000c512ba631ea0c29c9b963b4c16b2856faaec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
