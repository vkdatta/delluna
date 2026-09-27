export const name="notches-light";
export const id="dl_a84676f474084fc3aed4";
export const url=new URL("../icons/notches-light.svg?v=ee1f35a65df942d83b41193226063467c728eaf7f42598cf82454defc8322bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
