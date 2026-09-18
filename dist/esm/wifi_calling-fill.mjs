export const name="wifi_calling-fill";
export const id="dl_4f0e41921c7d49d28e72";
export const url=new URL("../icons/W/wifi_calling-fill.svg?v=263d37bad9bf4842c4c962d40ff52d3e49da0762b7046567a72f7c4f535e6c92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
