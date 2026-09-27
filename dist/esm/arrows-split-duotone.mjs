export const name="arrows-split-duotone";
export const id="dl_cebb20dee16d4efaac65";
export const url=new URL("../icons/arrows-split-duotone.svg?v=bcd9f17e320cea221f31cf761ecfc4debf0034f623ab8f3cbf0fa4435792ad6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
