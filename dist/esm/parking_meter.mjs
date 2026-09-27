export const name="parking_meter";
export const id="dl_353c9c91cd959a55535e";
export const url=new URL("../icons/parking_meter.svg?v=39b189d8c01f3a7a7e50791b1f92ea33decdda9fee57ef60fa8f14c8348fab44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
