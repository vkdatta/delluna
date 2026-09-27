export const name="robot-duotone";
export const id="dl_8dc2929b654441cab6d3";
export const url=new URL("../icons/robot-duotone.svg?v=e6ba763729b849d49b6835f6d1a9f2377f2dabfaa8b8a98ad37f345c9cbc4e5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
