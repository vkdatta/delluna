export const name="script-fill";
export const id="dl_70dfc548b35b14c26f83";
export const url=new URL("../icons/script-fill.svg?v=b7140b9837a780a262428b16cd4dd50dc75f9fa3effc78a035c0abd5460568dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
