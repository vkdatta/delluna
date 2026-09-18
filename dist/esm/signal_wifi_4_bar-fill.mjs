export const name="signal_wifi_4_bar-fill";
export const id="dl_fb1d185f19f9460a9e35";
export const url=new URL("../icons/signal_wifi_4_bar-fill.svg?v=e8fbdb01007fcf2325a3136cc936bfb96a9cdc4c1f0762a910270741002154e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
