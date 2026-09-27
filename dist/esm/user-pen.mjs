export const name="user-pen";
export const id="dl_b4e30c82d8b941189a92";
export const url=new URL("../icons/user-pen.svg?v=c2db7f9a9edbe26d4ec90ac1c995d3ba73b9921e746b9b232151495f7e11a666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
