export const name="other_houses";
export const id="dl_7a61b402f90c4afc5db6";
export const url=new URL("../icons/other_houses.svg?v=f438bfe1ff10a6e1bb2cf00169482a7ce8084861482fe20b7e4901d49efc9eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
