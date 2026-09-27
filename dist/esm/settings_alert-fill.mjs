export const name="settings_alert-fill";
export const id="dl_8ad7d39e6fe7d46459dc";
export const url=new URL("../icons/settings_alert-fill.svg?v=a5a948ac780e0cc630d5d54cb27fdbdf8271b204a0c57a5f2bc1afafc4c1bd03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
