export const name="rows-duotone";
export const id="dl_23b48c6eedfb46e7a3ab";
export const url=new URL("../icons/rows-duotone.svg?v=2af3801458eb4cb0a392c3a0a3717ab9fb0dae5e5b47b00edfafd862c31dab72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
