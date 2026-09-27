export const name="fitness_center-fill";
export const id="dl_acd19adba8c1447870c3";
export const url=new URL("../icons/fitness_center-fill.svg?v=5abea9ebaac84ecbd736b430f190f578a9038a2a6191184c542baf2b68a8caf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
