export const name="rebase-fill";
export const id="dl_dc192c4aa276491d925a";
export const url=new URL("../icons/rebase-fill.svg?v=172759912b675a8b457d4208e580a75b6232e53dd26d4b13953807fec0f76ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
