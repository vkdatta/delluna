export const name="watch_vibration";
export const id="dl_9374b5f26b25c2c3c01a";
export const url=new URL("../icons/watch_vibration.svg?v=77dc2480e8a5729ab4d90220924cad09ac5867ca34e4cd02357d4c877747dfd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
