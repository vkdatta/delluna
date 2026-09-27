export const name="speed_camera-fill";
export const id="dl_3c4895ee0d7f785ca4c0";
export const url=new URL("../icons/speed_camera-fill.svg?v=76058140f326586b307d24cafdd9f77d719ed60a493e38d2fb5d120c1a1b5ba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
