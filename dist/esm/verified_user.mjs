export const name="verified_user";
export const id="dl_19f494847bfe2b04c19c";
export const url=new URL("../icons/verified_user.svg?v=16eaf6c11e1934f90d8619781937e1e851fb8f01ff91e4c3ad6a5cbe5f61c734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
