export const name="signal_wifi_off-fill";
export const id="dl_ddefdb83a21bed4558f6";
export const url=new URL("../icons/signal_wifi_off-fill.svg?v=cea28a395b52da40c5c687323eafa43635c3303ee9d1c1af599593cfc7e26d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
