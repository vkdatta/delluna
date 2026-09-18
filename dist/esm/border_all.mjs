export const name="border_all";
export const id="dl_a10ca57d72ae42eabe5a";
export const url=new URL("../icons/border_all.svg?v=6f1294f848e9042306b96a0e0645598bdf02d7723156df36dfa6a40306b71e16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
