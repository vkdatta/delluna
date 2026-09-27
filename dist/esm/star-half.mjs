export const name="star-half";
export const id="dl_1fb11d96068bb3f215b1";
export const url=new URL("../icons/star-half.svg?v=0c8ef044bd15a3bedf5eba72a79c3a5574b4c6e337876160421bdd0618fae361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
