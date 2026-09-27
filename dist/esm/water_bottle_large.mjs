export const name="water_bottle_large";
export const id="dl_22bedf913fb08bd7523b";
export const url=new URL("../icons/water_bottle_large.svg?v=7b8f30eccbf977d4c882da1a3cca31e3b443b4e568be604413eba321240e42a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
