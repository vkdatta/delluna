export const name="network_wifi_3_bar-fill";
export const id="dl_ce2f1fa25a4baa6bed14";
export const url=new URL("../icons/network_wifi_3_bar-fill.svg?v=202c1063f0dc83e62f3f133eb5cbc5f5ed37998bb868347ae36b452c90447820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
