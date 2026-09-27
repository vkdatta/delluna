export const name="signal_wifi_4_bar-fill";
export const id="dl_baa8f62455e30c7e1989";
export const url=new URL("../icons/signal_wifi_4_bar-fill.svg?v=94d633d2c94739698634cabe9dfc18a5bd4f103c4c21fe061e4db18f5c76a04d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
