export const name="3g_mobiledata_badge-fill";
export const id="dl_415f2d3b5b718aa565ee";
export const url=new URL("../icons/3g_mobiledata_badge-fill.svg?v=35603c49a981a77d681f796071a94c9202e0772b243d01ae3b03b562e735869d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
