export const name="lte_mobiledata_badge-fill";
export const id="dl_96cd5de2a1224bf7974a";
export const url=new URL("../icons/L/lte_mobiledata_badge-fill.svg?v=f95f7a76ac45c7c190f467ccb459390699616bff126eaf2cc1ff5f106ba3ff56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
