export const name="lucid_2-import";
export const id="dl_5053583fcb1d4d959387";
export const url=new URL("../icons/lucid_2-import.svg?v=72e70bccd13449552c003519329ccbbeabfe1c3cfee0270749956c1f68d5b429",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
