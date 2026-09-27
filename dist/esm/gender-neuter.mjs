export const name="gender-neuter";
export const id="dl_6a00e6f4f9aa47318d79";
export const url=new URL("../icons/gender-neuter.svg?v=4bbaec1040ed45c32f2ab7fc3aeb1e7808596a2c2e09610ec3ca1891a0606ee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
