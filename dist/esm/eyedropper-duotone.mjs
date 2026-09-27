export const name="eyedropper-duotone";
export const id="dl_850f92ef3545496c8718";
export const url=new URL("../icons/eyedropper-duotone.svg?v=9dec7945309ceb2b92c3f2de04fa1fe6088f233e08328214f86dbd1373754090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
