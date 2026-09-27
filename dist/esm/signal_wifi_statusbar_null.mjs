export const name="signal_wifi_statusbar_null";
export const id="dl_5d6243644b4b3cfa43c1";
export const url=new URL("../icons/signal_wifi_statusbar_null.svg?v=01e6a41ab84c84937e60be5090b3bac3916351fb7074932fce3abfe2b269fb75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
