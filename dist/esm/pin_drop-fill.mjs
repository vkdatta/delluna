export const name="pin_drop-fill";
export const id="dl_5309dc3036621f2fc3bb";
export const url=new URL("../icons/pin_drop-fill.svg?v=5ccde40cd06ab54db6f1cab1284c0eb7163534ab613be9c7ad0577cef92c1203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
