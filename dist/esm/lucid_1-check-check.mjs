export const name="lucid_1-check-check";
export const id="dl_5aae1239dd184ad3bfc1";
export const url=new URL("../icons/lucid_1-check-check.svg?v=265bf6b708c1d272220771592d719dde84da12da501f02bbd6f7469312242089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
