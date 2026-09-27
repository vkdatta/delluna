export const name="hdr_on_select-fill";
export const id="dl_1f0359dd6e3dfebe1368";
export const url=new URL("../icons/hdr_on_select-fill.svg?v=79aa9a3293b2ec4f5fbfa3c86f5861cf2eded79d3f8ac2079030d8a52bdfb804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
