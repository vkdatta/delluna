export const name="pet_supplies-fill";
export const id="dl_d7c379b393dccca9d9c7";
export const url=new URL("../icons/pet_supplies-fill.svg?v=f09461dd5ec67b56ef87573b206986e89d45d7e00f1d3e52822fe82f104c15c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
