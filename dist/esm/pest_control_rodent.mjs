export const name="pest_control_rodent";
export const id="dl_e35ebb90e4a64cdc939d";
export const url=new URL("../icons/P/pest_control_rodent.svg?v=e361411594cecb4ee8d2b051cb2dee4e157119f100a704dc5de882e3aba4f5b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
