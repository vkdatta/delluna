export const name="wifi_find-fill";
export const id="dl_787eb196b59d88d5085d";
export const url=new URL("../icons/wifi_find-fill.svg?v=cde27ffed0c3176b37dcfba59606f48dc3c1e2a5119ef30d37584ac4ffd8ba85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
