export const name="person_4";
export const id="dl_00d6c2bebee51c03387d";
export const url=new URL("../icons/person_4.svg?v=176d49b33a56ce3f54313bb8918533b37359d8d38a78f12d6739ce13809beeb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
