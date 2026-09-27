export const name="train-regional-fill";
export const id="dl_915c00941643bda6ac09";
export const url=new URL("../icons/train-regional-fill.svg?v=38633aadab72cb1b69689db60b097809c2ce5e61f2a360ce016edc2914dfd2e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
