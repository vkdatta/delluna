export const name="data_info_alert-fill";
export const id="dl_ec582746e45080dfc033";
export const url=new URL("../icons/data_info_alert-fill.svg?v=ca07a5c72f76959dfd13754d0b42ff72718d8eaaff8f087e8e455a62fa8a1400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
