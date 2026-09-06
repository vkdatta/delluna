export const name="battery-charging-duotone";
export const id="dl_397782cf161543b3bff6";
export const url=new URL("../icons/battery-charging-duotone.svg?v=2168ac07330312b3eda9966557705dba438da8d2b258e56ec115d03b09ed9de0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
