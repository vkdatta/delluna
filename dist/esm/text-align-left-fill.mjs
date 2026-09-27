export const name="text-align-left-fill";
export const id="dl_dd6614bfdc8eeaf43bb4";
export const url=new URL("../icons/text-align-left-fill.svg?v=3ab1e2a6768f073378cb620167a3fb5afbe569c865287d54cebee00d433635ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
