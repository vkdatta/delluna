export const name="signal_wifi_bad";
export const id="dl_874d2f1330bae7d5a580";
export const url=new URL("../icons/signal_wifi_bad.svg?v=a693de4cbcfabeb1d033f3a4ec97572802065492e52ece46490e40ec1ca3fcd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
