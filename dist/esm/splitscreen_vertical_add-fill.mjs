export const name="splitscreen_vertical_add-fill";
export const id="dl_b491607c0a7322017121";
export const url=new URL("../icons/splitscreen_vertical_add-fill.svg?v=027222149b6e589a490a249756bea4f878dd132971366312dc11ab306fadb2e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
