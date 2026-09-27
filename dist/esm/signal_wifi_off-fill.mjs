export const name="signal_wifi_off-fill";
export const id="dl_12d95dc3723ddf210ab4";
export const url=new URL("../icons/signal_wifi_off-fill.svg?v=92f41dcfe2d996cbf3337d3ec8a91301c31880d3480091ca48f04defffd1e7fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
