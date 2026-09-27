export const name="truck-duotone";
export const id="dl_a1759f8148aac411e87b";
export const url=new URL("../icons/truck-duotone.svg?v=278e738442932c789d06c0f7abce9214cb1daa32059b4e36d4e9d86a6097bddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
