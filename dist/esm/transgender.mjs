export const name="transgender";
export const id="dl_3802ddf7cb2a418b8445";
export const url=new URL("../icons/transgender.svg?v=0fb2b2a877a419c1438924b9ea4fc4cea3a8efd0b31e8a81ab44ff05b55d8fd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
