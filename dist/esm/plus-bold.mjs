export const name="plus-bold";
export const id="dl_34f9a468de78427ea682";
export const url=new URL("../icons/plus-bold.svg?v=f713c431763cb7645e630a18397420b25dab2718ad2644d4143e83fb5ec04bb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
