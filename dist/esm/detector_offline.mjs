export const name="detector_offline";
export const id="dl_9980a420a15d85ebd4cd";
export const url=new URL("../icons/detector_offline.svg?v=b990af5524cf9342c64f3d97a5b82ffb05e65cc8741392f452b7c31065ce6644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
