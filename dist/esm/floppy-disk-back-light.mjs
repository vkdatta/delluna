export const name="floppy-disk-back-light";
export const id="dl_1aa96140997c461aa3fa";
export const url=new URL("../icons/floppy-disk-back-light.svg?v=8c5cf9a04565194e5bf3a9b214b0670b87bc0e003cafe8dfbc6e1195c90fa2a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
