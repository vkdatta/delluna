export const name="signal_wifi_statusbar_null";
export const id="dl_4443846eeb1184b376bd";
export const url=new URL("../icons/signal_wifi_statusbar_null.svg?v=6cc3af096faa2485ca5359cd783553674f19737072c0dffc29ffac3634d85bb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
