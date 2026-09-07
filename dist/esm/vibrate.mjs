export const name="vibrate";
export const id="dl_6119a54dc9a348099000";
export const url=new URL("../icons/V/vibrate.svg?v=aded2db4f1dbb9fed27d0934a8562e6163ce68b3d9642527bc423804f7e9f596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
