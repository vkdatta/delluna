export const name="person-simple-snowboard-fill";
export const id="dl_42970ed39dbf492192d0";
export const url=new URL("../icons/person-simple-snowboard-fill.svg?v=8781f6a7a3ee924d4c0e4794fad80243725c240a80eddcd6e34d16f2e63911e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
