export const name="push-pin-slash";
export const id="dl_35f22e0f4a1147e88a34";
export const url=new URL("../icons/push-pin-slash.svg?v=2ac456aab2f634900d8872c4ac740a608784769997225726252b2ba5add98334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
