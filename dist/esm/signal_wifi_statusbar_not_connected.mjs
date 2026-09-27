export const name="signal_wifi_statusbar_not_connected";
export const id="dl_c07735904e9e9cbc82a9";
export const url=new URL("../icons/signal_wifi_statusbar_not_connected.svg?v=ae103c79ccc8356ce960c7b358f96a75a34c1d3064052691add635c02f203ea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
