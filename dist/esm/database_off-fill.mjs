export const name="database_off-fill";
export const id="dl_d66875d8491cebeca7b9";
export const url=new URL("../icons/database_off-fill.svg?v=f82c2672181641d717dcd2bee07bb94eb8091f873731bd8cc2aeffffc0e38de2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
