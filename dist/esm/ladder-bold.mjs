export const name="ladder-bold";
export const id="dl_4bf473dc550a44048693";
export const url=new URL("../icons/ladder-bold.svg?v=4aca6c17ea6994755dc63dd8811120711220edbd7cf2663c466e8b71d9268211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
