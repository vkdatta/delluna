export const name="repeat_one_on-fill";
export const id="dl_8693d6efde41b120c2cd";
export const url=new URL("../icons/repeat_one_on-fill.svg?v=28e14fc9028326ecc3d7467a7cf6f61c6af0d34a863fb8ae16f2207e5abd8324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
