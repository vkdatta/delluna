export const name="ramp_right-fill";
export const id="dl_8a0e0853d9dff26ebbed";
export const url=new URL("../icons/ramp_right-fill.svg?v=a807c67697bd5646de32765349d90c57aa7e9613002ea355ba5a06509446f559",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
