export const name="voting_chip-fill";
export const id="dl_d3efc48c67e4e3b3ca2f";
export const url=new URL("../icons/voting_chip-fill.svg?v=345fee3e2888497965dc68314c12be19caa73180551c6a7a2e196ba72373eca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
