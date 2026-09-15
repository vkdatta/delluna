export const name="database_upload-fill";
export const id="dl_d8c5621c2a4e41c1ae1a";
export const url=new URL("../icons/D/database_upload-fill.svg?v=d5ce78a928349cb576162da63d4e2e915c289c11ded897ceb94f9ed4081fbe58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
