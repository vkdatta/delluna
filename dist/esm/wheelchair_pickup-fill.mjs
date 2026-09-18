export const name="wheelchair_pickup-fill";
export const id="dl_ee405ab2c4af498583e3";
export const url=new URL("../icons/W/wheelchair_pickup-fill.svg?v=988585d298b7ba8a47c25959bc60bf1b92cb66997bb63929144c9ff34476f1e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
