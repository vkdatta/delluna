export const name="signal_cellular_2_bar-fill";
export const id="dl_aacec537196e41689046";
export const url=new URL("../icons/S/signal_cellular_2_bar-fill.svg?v=dad11fea1127a13e79a62bfe75d111338880aa52ccd2a83a9ce5edd29c2d2358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
