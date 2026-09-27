export const name="orbit";
export const id="dl_020604b23b6250697faa";
export const url=new URL("../icons/orbit.svg?v=d337dc5c904101c0cf3723d47444885e7d0e97c1b17b088e93c6193651cd4186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
