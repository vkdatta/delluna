export const name="drag_indicator-fill";
export const id="dl_24b127d39603469f84de";
export const url=new URL("../icons/D/drag_indicator-fill.svg?v=442aaaea47fa21a706420011058158b0627c6fd583c1f210f86a138491394912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
