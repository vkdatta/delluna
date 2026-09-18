export const name="signal_wifi_bad";
export const id="dl_c96317eee27145bc8595";
export const url=new URL("../icons/signal_wifi_bad.svg?v=a693de4cbcfabeb1d033f3a4ec97572802065492e52ece46490e40ec1ca3fcd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
