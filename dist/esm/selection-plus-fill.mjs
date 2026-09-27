export const name="selection-plus-fill";
export const id="dl_4e7e5069735129e442b9";
export const url=new URL("../icons/selection-plus-fill.svg?v=fda55aecea0483fc27fbf4455014d8993cd86bc107ab603712e4d87539fd9cf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
