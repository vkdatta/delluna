export const name="help_clinic-fill";
export const id="dl_10e5a1e8f6a7861dca34";
export const url=new URL("../icons/help_clinic-fill.svg?v=ec3f530db6e97a90ce8b2da435067d8b8b9cd4082bfd7fe6cbd318c029521d41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
