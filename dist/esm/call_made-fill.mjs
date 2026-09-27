export const name="call_made-fill";
export const id="dl_8d8aad2737db936cd95c";
export const url=new URL("../icons/call_made-fill.svg?v=442381ac2f16b4ec3df753bdfe45e1af591f9b4ee585e3c4c78d9b8b67c0768b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
