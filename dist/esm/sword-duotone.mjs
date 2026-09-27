export const name="sword-duotone";
export const id="dl_ac9531fca0776b9c4ce3";
export const url=new URL("../icons/sword-duotone.svg?v=4e9cf17f458bf92ecc0e6a8e0584fd632de5d985d41a56a369d46b6283d47750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
