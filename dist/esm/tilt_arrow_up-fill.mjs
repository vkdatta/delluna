export const name="tilt_arrow_up-fill";
export const id="dl_5c4c66001a85fdcaf41e";
export const url=new URL("../icons/tilt_arrow_up-fill.svg?v=94b27a5ee19ead1354021157fb49e5ed5a7cd50c4f6d71db0fa6b9a480278c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
