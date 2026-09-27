export const name="export-light";
export const id="dl_b3a543f22fe54263b727";
export const url=new URL("../icons/export-light.svg?v=a634ad029647ace3fab6e3ae3c7af554c4a494e478f085ee8f43e3615f3a0aa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
