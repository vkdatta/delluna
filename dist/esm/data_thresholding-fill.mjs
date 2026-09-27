export const name="data_thresholding-fill";
export const id="dl_0dce0889a006133f1adf";
export const url=new URL("../icons/data_thresholding-fill.svg?v=04a0b2dedeb2983b6b2bd78002d88b200cab5fbe213cf4f5d8a620901aa6acb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
