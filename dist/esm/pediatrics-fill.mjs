export const name="pediatrics-fill";
export const id="dl_d1ab5dc9de9b0f710e54";
export const url=new URL("../icons/pediatrics-fill.svg?v=7d02f9b8820976b8f781e2b5b5dba473ec82a5906e304bdd59c28ea9ab2ca517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
