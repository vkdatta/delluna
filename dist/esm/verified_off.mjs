export const name="verified_off";
export const id="dl_e5e3fd83905f9636c378";
export const url=new URL("../icons/verified_off.svg?v=f60f480e79d644a58bdf760f90c024b9b641a76d91f818e110a6359c4c5f660a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
