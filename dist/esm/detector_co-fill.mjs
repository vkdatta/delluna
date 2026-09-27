export const name="detector_co-fill";
export const id="dl_ebc64629ecffd6d6d8f0";
export const url=new URL("../icons/detector_co-fill.svg?v=8804a4f347df6edf43b80f1fca0932651c997b0ae3f5b241eaaf5d8daeb5b0e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
