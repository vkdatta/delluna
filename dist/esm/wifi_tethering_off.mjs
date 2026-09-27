export const name="wifi_tethering_off";
export const id="dl_682a4bd68c6d73eb6e02";
export const url=new URL("../icons/wifi_tethering_off.svg?v=b1694b129f05c583702120535ea9c4725414aae2ebc3cf7d12628d3cde79f376",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
