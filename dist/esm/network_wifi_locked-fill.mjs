export const name="network_wifi_locked-fill";
export const id="dl_9778810116f07810964d";
export const url=new URL("../icons/network_wifi_locked-fill.svg?v=fd8e7a3e7e55ae938030e6b4384265605d93b41fbf969be1ea347a742f0efa60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
