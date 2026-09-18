export const name="flag_check-fill";
export const id="dl_cf8e0f3f4851430ab50b";
export const url=new URL("../icons/flag_check-fill.svg?v=fd9162daf8cb420bdcd4db7966fdb23e23f34a8a86b164c5b8dfe9d67125bae9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
