export const name="person_apron-fill";
export const id="dl_d272205dfc76e03e6c6f";
export const url=new URL("../icons/person_apron-fill.svg?v=ef69940127c69a7cf4ee748fbd2ae3a38626bf68d9bb166b3a331837ebe48da3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
