export const name="thermostat_carbon-fill";
export const id="dl_19cf98c2f6fc7a13e2cf";
export const url=new URL("../icons/thermostat_carbon-fill.svg?v=be90d2e5a9e7125471ae7675835057d21ea7e6ab336bc931831cb7e45eb4096e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
