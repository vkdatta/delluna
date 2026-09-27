export const name="magnifying-glass-plus-duotone";
export const id="dl_2a2944e5366046758bc3";
export const url=new URL("../icons/magnifying-glass-plus-duotone.svg?v=329dda443dd990816ecbd67c8f475640ee41fd945ae59043b638a638423fec94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
