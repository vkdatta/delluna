export const name="database-duotone";
export const id="dl_dc3703ce0b3541c7bb68";
export const url=new URL("../icons/database-duotone.svg?v=2543df52f9d509307cd7d08d8bf2ba9033aa23207791c32e2526841ef869ea1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
