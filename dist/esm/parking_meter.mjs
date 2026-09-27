export const name="parking_meter";
export const id="dl_06a74a7485d496d1ee73";
export const url=new URL("../icons/parking_meter.svg?v=fd5108f1e27065b788b24d6c6d350ed8219e671f2787295aa40f8fbebcab2ef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
