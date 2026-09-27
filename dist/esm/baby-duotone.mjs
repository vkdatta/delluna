export const name="baby-duotone";
export const id="dl_735c0e9874334d1a8130";
export const url=new URL("../icons/baby-duotone.svg?v=aed2fed5752d39c764bb86f0e660ee3de3f92eb7bb9683db622310302f24bb7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
