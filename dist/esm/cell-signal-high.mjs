export const name="cell-signal-high";
export const id="dl_daca225529b34338b891";
export const url=new URL("../icons/cell-signal-high.svg?v=ff8975bdc8cdfabe2fc521646d9d840792a38ce6330401af4ea5a9bcb6419643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
