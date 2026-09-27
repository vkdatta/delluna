export const name="database-duotone";
export const id="dl_dc3703ce0b3541c7bb68";
export const url=new URL("../icons/database-duotone.svg?v=d28817630ffebd1edd606a45e8f72b64f57c0f0b11403e00f5764babd2c0f0c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
