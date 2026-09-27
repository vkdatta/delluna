export const name="vertical_split";
export const id="dl_a07a1d238066406e2892";
export const url=new URL("../icons/vertical_split.svg?v=dea609f9f4ed05a82f4b94ff927262eb4897ab3a11cbdec72eddabbe42d7f52a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
