export const name="flame-duotone";
export const id="dl_ae1af819e70b4bf7bc2e";
export const url=new URL("../icons/flame-duotone.svg?v=2af8e02aa067e805d891f457bb07006cdbe58d04b57983f746c5f2cd3a84b12f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
