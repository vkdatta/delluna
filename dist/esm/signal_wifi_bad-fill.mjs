export const name="signal_wifi_bad-fill";
export const id="dl_da7cd7a2d593095cbd97";
export const url=new URL("../icons/signal_wifi_bad-fill.svg?v=674043251aca5db9173056b05d7d2892b8c5bec21279e77fc2488db95481302a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
