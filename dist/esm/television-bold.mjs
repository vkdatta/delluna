export const name="television-bold";
export const id="dl_c01ee11e24ee4af09713";
export const url=new URL("../icons/T/television-bold.svg?v=4d7e50cf5736b205c2989218c3e17735faeb84800f1a00b111797dce75ce3828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
