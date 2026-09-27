export const name="pinwheel-duotone";
export const id="dl_b33c7ebe149443c19155";
export const url=new URL("../icons/pinwheel-duotone.svg?v=23455cc69711e19105ffe62f5d6ada260bc74d0ec35433bb0ced3d275fbbde36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
