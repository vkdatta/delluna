export const name="users-round";
export const id="dl_8cc5642fc95d40c1afb7";
export const url=new URL("../icons/users-round.svg?v=aa6dba8b877c18816f7796fbda8361d6bc323246bcf2c23d799818aacd9a6566",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
