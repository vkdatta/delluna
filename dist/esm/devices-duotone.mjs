export const name="devices-duotone";
export const id="dl_441e378c639e44e8ad68";
export const url=new URL("../icons/devices-duotone.svg?v=0002bc66680714c3c5f6fcb06c59b521045baa7c1ce312eb40e0d150706920b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
