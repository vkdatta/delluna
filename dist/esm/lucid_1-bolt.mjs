export const name="lucid_1-bolt";
export const id="dl_f15639b084e5436eb078";
export const url=new URL("../icons/lucid_1-bolt.svg?v=d8549b840be1e4db65f828011bad71817ada80882e0e2bfd1691b13a08941b1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
