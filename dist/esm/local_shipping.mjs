export const name="local_shipping";
export const id="dl_f03a600e448f248043cf";
export const url=new URL("../icons/local_shipping.svg?v=25177d65f8b4990add349237f95d5f6912859e1d5a459735d98fcd8dce3a65e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
