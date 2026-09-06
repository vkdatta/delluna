export const name="lucid_1-blender";
export const id="dl_9cd825c52e9a4633bff3";
export const url=new URL("../icons/lucid_1-blender.svg?v=3ee9fe2667512157c8f752a7a5e5987cd59f825a3d905899179ecd18419901ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
