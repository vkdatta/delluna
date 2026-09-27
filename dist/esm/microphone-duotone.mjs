export const name="microphone-duotone";
export const id="dl_9f9b6d635a3148dab541";
export const url=new URL("../icons/microphone-duotone.svg?v=5dc4f9c970d9b01f9015cde5ada35e0b7b695c1939be9cefcbc332762325b3d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
