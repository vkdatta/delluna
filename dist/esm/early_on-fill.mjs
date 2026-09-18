export const name="early_on-fill";
export const id="dl_1f52cda5c6ab4aa3bf65";
export const url=new URL("../icons/early_on-fill.svg?v=33f6b3ee2a9f72ecf354691b566f91a73e1175f1e022112bc76eef78519912c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
