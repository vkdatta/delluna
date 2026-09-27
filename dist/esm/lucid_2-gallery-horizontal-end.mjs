export const name="lucid_2-gallery-horizontal-end";
export const id="dl_1fba4281eae64f7fb5e1";
export const url=new URL("../icons/lucid_2-gallery-horizontal-end.svg?v=a7105a5eaadfd7e5045ad7592eb0f9c21ac528cea53dffb98ecbf575fb061866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
