export const name="trail_length_short-fill";
export const id="dl_94d2a5f35e904c4a97b4";
export const url=new URL("../icons/T/trail_length_short-fill.svg?v=ce14f03ef80b94e28eab3dfb90649daaf213e0660bf6806f916977a86170afeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
