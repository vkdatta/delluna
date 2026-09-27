export const name="score-fill";
export const id="dl_4841e1cb6eb8ea608341";
export const url=new URL("../icons/score-fill.svg?v=80c7e40755941ef76d907a0311a1019e400ecddfd86ec4a1b59c6f0043725b99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
