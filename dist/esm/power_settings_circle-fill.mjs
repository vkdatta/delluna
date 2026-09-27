export const name="power_settings_circle-fill";
export const id="dl_e6455e726afe780510c4";
export const url=new URL("../icons/power_settings_circle-fill.svg?v=5e887d1d2f51eb636c6b10c7b23e43f2ae453d0087cd3ccbef98cb40f0135ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
