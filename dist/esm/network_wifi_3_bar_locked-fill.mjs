export const name="network_wifi_3_bar_locked-fill";
export const id="dl_4f3f29fc34a49d0d99e1";
export const url=new URL("../icons/network_wifi_3_bar_locked-fill.svg?v=a5f962d5af001567f089128632ded3f0cf9c3a228d53ab30d1cf31ee87bbd408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
