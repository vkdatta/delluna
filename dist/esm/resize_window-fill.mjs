export const name="resize_window-fill";
export const id="dl_394ed3e9249c40818b14";
export const url=new URL("../icons/R/resize_window-fill.svg?v=c72342897d5259bece8244cf51c001f2cec6344467289486ce2f06ac7b761d24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
