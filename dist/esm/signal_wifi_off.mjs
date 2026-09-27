export const name="signal_wifi_off";
export const id="dl_77b41834334a5385b0d3";
export const url=new URL("../icons/signal_wifi_off.svg?v=c6ffba8b1a19bfa12498ff5cbed957ea028b8f58e979aa35b350170b82c0db16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
