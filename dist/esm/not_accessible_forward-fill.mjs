export const name="not_accessible_forward-fill";
export const id="dl_f3dc75210444cc767563";
export const url=new URL("../icons/not_accessible_forward-fill.svg?v=9dd6a1c0cb12ad5bff8cc1c21327403481114777621d8a8681c355ebf5de51e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
