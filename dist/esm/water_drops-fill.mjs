export const name="water_drops-fill";
export const id="dl_2903dd7a21a40d5e838d";
export const url=new URL("../icons/water_drops-fill.svg?v=4e9efada89723f896800e573fa6ba2c64a0797e28440508f6a1325de9fb5a5d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
