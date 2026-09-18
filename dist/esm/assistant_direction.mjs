export const name="assistant_direction";
export const id="dl_fdc4077a34e449688411";
export const url=new URL("../icons/assistant_direction.svg?v=47f0b498fe103f4d3856fc433b6c39717aabbdd52c59cb84a0b13851881dc0c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
