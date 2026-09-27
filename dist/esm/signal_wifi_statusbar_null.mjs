export const name="signal_wifi_statusbar_null";
export const id="dl_ff8f18d99d7fe0fe3dc9";
export const url=new URL("../icons/signal_wifi_statusbar_null.svg?v=a9bb86d9308a9b022fec0dc27f3e6495b7cb8a20d20fbad31b5adf71a7d36296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
