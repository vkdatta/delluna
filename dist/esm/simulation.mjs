export const name="simulation";
export const id="dl_074ccbfedfbb046c81d6";
export const url=new URL("../icons/simulation.svg?v=9e64c434d1631906a908b7ba1d24e42300f1058bba7b94a91021cd5125892fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
