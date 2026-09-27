export const name="number-square-nine-duotone";
export const id="dl_e40b3dbd907348e09f0b";
export const url=new URL("../icons/number-square-nine-duotone.svg?v=d5dd498633bfeaff75094899fccb822718609e89dccc8a17138c2d91aaf2a590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
