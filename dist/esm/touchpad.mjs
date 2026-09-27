export const name="touchpad";
export const id="dl_abb1fc7a0f994e898400";
export const url=new URL("../icons/touchpad.svg?v=59ca8b08c8c0040220b6cb7e7918d82bda1ec4cf85c88f172fa1a6cebfe9a90a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
