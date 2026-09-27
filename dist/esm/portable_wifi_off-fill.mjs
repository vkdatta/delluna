export const name="portable_wifi_off-fill";
export const id="dl_e64dc15eeaba5930f79a";
export const url=new URL("../icons/portable_wifi_off-fill.svg?v=6b6280dd39b5a3b5da37d8bf41ded22627571fab776209522e286b94cbcbab48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
