export const name="mouse_lock";
export const id="dl_0c5caee3e9fc35d62468";
export const url=new URL("../icons/mouse_lock.svg?v=d044c83b951dbd1b7002098c0fb6282907c4e5e5108042cd2b3fb654aa090365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
