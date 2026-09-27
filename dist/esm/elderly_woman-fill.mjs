export const name="elderly_woman-fill";
export const id="dl_c1d42d710901019afec0";
export const url=new URL("../icons/elderly_woman-fill.svg?v=50af072540a609d28f3444660bb51d20cba225b096ba67df0d89ccc7c2562b52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
