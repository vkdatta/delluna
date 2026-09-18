export const name="no_luggage-fill";
export const id="dl_be6345d904f843b584d7";
export const url=new URL("../icons/N/no_luggage-fill.svg?v=c4f0b082cdc9a272a6062775edc349b4e592f110616235b521e1d0c2401173d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
