export const name="shrimp";
export const id="dl_fe4b1edfd355404f809f";
export const url=new URL("../icons/S/shrimp.svg?v=72d01b1574c98bfd49bd08bc22f5a940aea15edd8890727b9efad30189a7518c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
