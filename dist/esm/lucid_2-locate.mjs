export const name="lucid_2-locate";
export const id="dl_2217e06c1c104f7fba55";
export const url=new URL("../icons/lucid_2-locate.svg?v=d4dfd7bbc66d15b015c8850762bfd83bfdab40ecc0cac17c59d8881084c5bd6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
