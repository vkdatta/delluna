export const name="dataset";
export const id="dl_4f1a13a31385c83e2b57";
export const url=new URL("../icons/dataset.svg?v=ab9fec378083cab25966ac280b9dc9ab25f10fa1c719b65863d229e42e77c9d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
