export const name="pint-glass-bold";
export const id="dl_e8f44bdabb414a748a6d";
export const url=new URL("../icons/pint-glass-bold.svg?v=05e2c346a9ed5a7bdd188d4c2a2a2381edcac9fedf0644c80af47db610817f3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
