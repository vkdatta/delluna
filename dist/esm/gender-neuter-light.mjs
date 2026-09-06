export const name="gender-neuter-light";
export const id="dl_fee129190adf41b49527";
export const url=new URL("../icons/gender-neuter-light.svg?v=1dfd9dae7e985d4e74446e58dd8f28a2bf3a79018ab3a0a29db734b6c2fcd5d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
