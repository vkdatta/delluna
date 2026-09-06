export const name="office-chair-light";
export const id="dl_011869c5c9a84528b2b4";
export const url=new URL("../icons/office-chair-light.svg?v=81944e6b2f8b8c849426f4a7be19a521faef9abd3d1b853080a105dff19508db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
