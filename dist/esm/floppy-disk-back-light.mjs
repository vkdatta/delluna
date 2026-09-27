export const name="floppy-disk-back-light";
export const id="dl_1aa96140997c461aa3fa";
export const url=new URL("../icons/floppy-disk-back-light.svg?v=0d35ed1c019004609c23d62923bf90f5bd3eb291cb9529596a7322c5d2b3317e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
