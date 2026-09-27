export const name="wheat-off";
export const id="dl_d76ff4ed5f584cbf86cf";
export const url=new URL("../icons/wheat-off.svg?v=76cbb5edbd518d4e2685a444fc26e4e1516337c8782657ea6f920350f79af72f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
