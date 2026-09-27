export const name="lucid_1-arrow-big-right";
export const id="dl_e0679ac153864315928c";
export const url=new URL("../icons/lucid_1-arrow-big-right.svg?v=a3b2fe86ec059e4d6890d97f0ea3790853d590e49cecf45544d2127b9515618a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
