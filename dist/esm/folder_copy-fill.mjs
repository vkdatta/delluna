export const name="folder_copy-fill";
export const id="dl_e8e3928d1c3a4b94ab80";
export const url=new URL("../icons/F/folder_copy-fill.svg?v=157b3da7d3df48e87529d310e72fc064d77f027c719aee4b3ff8b3e980988271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
