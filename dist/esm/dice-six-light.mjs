export const name="dice-six-light";
export const id="dl_84672846a9d94226a42f";
export const url=new URL("../icons/dice-six-light.svg?v=f253b3f0714c7b6098bbea02be4c2d5e3a7d50a5c7318c0827f9785d2b6f87d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
