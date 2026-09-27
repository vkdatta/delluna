export const name="person_add";
export const id="dl_a327195ccb712e58aaa1";
export const url=new URL("../icons/person_add.svg?v=243c8ef4928e7f0f0b417e706fe1e1837c4b200d3bdd32d0729110553d404a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
