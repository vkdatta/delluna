export const name="signal_wifi_off-fill";
export const id="dl_9ffa72de04924474868d";
export const url=new URL("../icons/signal_wifi_off-fill.svg?v=019ae4bd7d851d0e30dd51cb89f62d1b4396813a25712535008d4f436399c2d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
