export const name="lucid_1-blender";
export const id="dl_9cd825c52e9a4633bff3";
export const url=new URL("../icons/lucid_1-blender.svg?v=bda7a0aa99eb4c98bf8d72455c33474b7e7d9dd56ce485d1f45371f80f63a028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
