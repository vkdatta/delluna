export const name="update";
export const id="dl_e3f24f82d78dc3942f9d";
export const url=new URL("../icons/material_symbols/update.svg?v=17e8baa520ef282dce6cc4e7fae2cb33a2131d1ba29da9ada4fb83876a8ebbbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
