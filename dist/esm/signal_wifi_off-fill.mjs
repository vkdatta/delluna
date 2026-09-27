export const name="signal_wifi_off-fill";
export const id="dl_8742994c84e53c3ee19c";
export const url=new URL("../icons/signal_wifi_off-fill.svg?v=d81f4f260c263ed766cddbffbd73f97c01cf2f02a01369131e4b1f319a1ca1df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
