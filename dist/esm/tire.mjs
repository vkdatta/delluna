export const name="tire";
export const id="dl_c7d0c7dababa3d568fb0";
export const url=new URL("../icons/tire.svg?v=9201b3dc3cdf452bf0a3133d0a7c17c051209300197a749ae33ce49d885a8d0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
