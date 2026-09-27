export const name="wifi_2_bar-fill";
export const id="dl_d12fda4844c563982b23";
export const url=new URL("../icons/wifi_2_bar-fill.svg?v=163e64b86006c7d6344485ea099e6ff09744ac1a1ee600b8ba7891e9bf3fab5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
