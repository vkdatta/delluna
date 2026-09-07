export const name="cloud-slash-fill";
export const id="dl_1f4856dba0104867802f";
export const url=new URL("../icons/cloud-slash-fill.svg?v=bd75b7d465e173b0ba026a47d6003518350a4f3514211705d1009dc9987c6b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
