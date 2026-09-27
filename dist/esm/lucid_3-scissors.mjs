export const name="lucid_3-scissors";
export const id="dl_298000f037314a6da436";
export const url=new URL("../icons/lucid_3-scissors.svg?v=3df9ad5dbfe375e66491d88e9ab764456d50201b89c0a2473a3746ad7af16140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
