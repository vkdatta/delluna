export const name="location_chip-fill";
export const id="dl_12ce29ab8fd9ceed3f40";
export const url=new URL("../icons/location_chip-fill.svg?v=793cd41fe2958156752fa7e6f01471c78bd1d9ed7e36f818aefa28d54269bdd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
