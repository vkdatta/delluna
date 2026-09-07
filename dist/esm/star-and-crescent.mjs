export const name="star-and-crescent";
export const id="dl_a5aa8a7c3a164945aa32";
export const url=new URL("../icons/S/star-and-crescent.svg?v=5fea9bd668b340f2ccc911a23c44e9b8300903cae1b9f98531f0e86a59874005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
