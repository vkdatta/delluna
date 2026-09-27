export const name="lifebuoy-fill";
export const id="dl_411630075ce54c878df6";
export const url=new URL("../icons/lifebuoy-fill.svg?v=ecb21cb9de2a3afb562173ebf8b6995750094c2009732d051738c5ab43781579",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
