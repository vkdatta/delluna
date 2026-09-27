export const name="vibrate";
export const id="dl_9694ca413dc9e20a6b6a";
export const url=new URL("../icons/vibrate.svg?v=aded2db4f1dbb9fed27d0934a8562e6163ce68b3d9642527bc423804f7e9f596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
