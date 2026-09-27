export const name="wifi_1_bar-fill";
export const id="dl_cb07c3f967992131ad94";
export const url=new URL("../icons/wifi_1_bar-fill.svg?v=2c22a548557bda1f20778f5a25dfb0c20138a789ae156bce67f65eb253d90f59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
