export const name="data_info_alert-fill";
export const id="dl_19cb8f00fa07f8b82259";
export const url=new URL("../icons/data_info_alert-fill.svg?v=e459e389a1cb04a12336eea91ec296c417c1fb786877feae98a2061388135517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
