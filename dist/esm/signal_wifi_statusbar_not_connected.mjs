export const name="signal_wifi_statusbar_not_connected";
export const id="dl_8d0baa917c3a58756157";
export const url=new URL("../icons/signal_wifi_statusbar_not_connected.svg?v=3edfc57d4b6cc7e694e24d0b3c3e700ec6dba0b06ae49aca524ab72a1c77d02d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
