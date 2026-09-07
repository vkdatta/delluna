export const name="behance-logo-fill";
export const id="dl_f844fed30b2b44dba575";
export const url=new URL("../icons/behance-logo-fill.svg?v=bf78770e3cea39bb2ae9dab31923d531025480fc2493601bd6752762eb167954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
