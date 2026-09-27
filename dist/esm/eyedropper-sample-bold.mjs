export const name="eyedropper-sample-bold";
export const id="dl_daae982cf1144a7fa173";
export const url=new URL("../icons/eyedropper-sample-bold.svg?v=867dbcc75a4b965b1ecd87487dbe7402c5f1b9e723cdd9c656ffead01713aae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
