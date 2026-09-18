export const name="signal_wifi_statusbar_not_connected";
export const id="dl_41a8b36de52b4b93a9ea";
export const url=new URL("../icons/signal_wifi_statusbar_not_connected.svg?v=ac7a9af247501d1e96dde7284a4c7b983b484d55684f63732bcd50cd59d9a26c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
