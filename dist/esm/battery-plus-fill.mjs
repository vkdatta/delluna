export const name="battery-plus-fill";
export const id="dl_45e532dc2086486085e7";
export const url=new URL("../icons/battery-plus-fill.svg?v=34197071dd6ea10aa8aa3f9f33e4860c563befe1210889c3d14da6ba89e3ccff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
