export const name="lucid_1-baby";
export const id="dl_543cc6346d534ec4a129";
export const url=new URL("../icons/lucid_1-baby.svg?v=ff799634241ff1758936c64f58bb319299a0fa8704858bdd3877f1596835cbf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
