export const name="lucid_1-blender";
export const id="dl_9cd825c52e9a4633bff3";
export const url=new URL("../icons/lucid_1-blender.svg?v=c7cf8907b84217a51fa182ee575dec7c683e83398cffbc28f97f12158452ed1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
