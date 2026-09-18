export const name="family_star-fill";
export const id="dl_56cd4ff6d1c14c1385ba";
export const url=new URL("../icons/family_star-fill.svg?v=af915d1827118e09f4c4668278c05b6fa42e7e4bf23e7b0898381c7448bf489f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
