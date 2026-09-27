export const name="date_range-fill";
export const id="dl_d6ef483194d465c5c2a2";
export const url=new URL("../icons/date_range-fill.svg?v=aab917e59d9c1763e34da40be4a15f711e53126155d7db14f423de6d3387fed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
