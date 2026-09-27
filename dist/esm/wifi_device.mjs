export const name="wifi_device";
export const id="dl_9106b1769a470d4517b2";
export const url=new URL("../icons/wifi_device.svg?v=afa0a345945cea44ff6ab8a1104c72cc82b381b0f62874b9e143ac94e1314e52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
