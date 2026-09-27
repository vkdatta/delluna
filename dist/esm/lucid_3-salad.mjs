export const name="lucid_3-salad";
export const id="dl_53eeb309ba414c199892";
export const url=new URL("../icons/lucid_3-salad.svg?v=1b51b347a6639e049a0dca2c30d029cc1205d740f6b04544b3859745b8b94022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
