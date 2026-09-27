export const name="power_settings_new-fill";
export const id="dl_c2e86dbcaaa8df319fac";
export const url=new URL("../icons/power_settings_new-fill.svg?v=889a38bd3dcb41d7d93617c17aa7dd2168b29e8dd6b6d63e1983d2145ff09503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
