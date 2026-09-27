export const name="data_thresholding-fill";
export const id="dl_6b0422537f79e74cd143";
export const url=new URL("../icons/data_thresholding-fill.svg?v=fa5b322c1d7f31fd7afe2c722ce8521638f2620fe910bf2613efca707594cc05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
