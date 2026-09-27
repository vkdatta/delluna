export const name="trolley-fill";
export const id="dl_2d5cb33104cb261a9519";
export const url=new URL("../icons/trolley-fill.svg?v=9b07503585e0696a2178288ea13ebcc779f93b80f93bea67d59b72654c5e1d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
