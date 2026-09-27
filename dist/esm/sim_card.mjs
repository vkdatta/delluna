export const name="sim_card";
export const id="dl_1622ca8b4897b93c2e0c";
export const url=new URL("../icons/sim_card.svg?v=be12a857c3399bd8a0c11e81ccf884bed2a38c90457c963f8493f92a46900837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
