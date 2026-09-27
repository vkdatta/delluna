export const name="hoodie";
export const id="dl_d00af9fb41b4452b8c39";
export const url=new URL("../icons/hoodie.svg?v=241513ee840bde950cb2755ce51c63da96b3910083579fc1c934dd1b4a310802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
