export const name="truck-duotone";
export const id="dl_40e2e0a0c2b24771b903";
export const url=new URL("../icons/T/truck-duotone.svg?v=278e738442932c789d06c0f7abce9214cb1daa32059b4e36d4e9d86a6097bddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
