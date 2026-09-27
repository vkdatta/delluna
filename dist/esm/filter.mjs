export const name="filter";
export const id="dl_c3808658bae96935c640";
export const url=new URL("../icons/filter.svg?v=858f49f027e3fa939c8ab69d82e0616668b0af9d359fd45a9cfccbb4a98900da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
