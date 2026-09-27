export const name="sun-duotone";
export const id="dl_eba4098b258f894477fd";
export const url=new URL("../icons/sun-duotone.svg?v=ab408a0f41b45d7eeeb0014673acbe96273a31261e060213119dd0d864206660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
