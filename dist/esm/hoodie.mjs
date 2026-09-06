export const name="hoodie";
export const id="dl_d00af9fb41b4452b8c39";
export const url=new URL("../icons/hoodie.svg?v=ef34261eb4bd8bef3a2385b6f5c385812ea82770f04ab5a910e8c9e46e3f9df2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
