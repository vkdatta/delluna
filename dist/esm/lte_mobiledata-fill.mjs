export const name="lte_mobiledata-fill";
export const id="dl_ee4de894332295e06e20";
export const url=new URL("../icons/lte_mobiledata-fill.svg?v=14d532bd7636ef23a6c45ad6a461ca6fb0055cb22159d246fe3eb59755a41ad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
