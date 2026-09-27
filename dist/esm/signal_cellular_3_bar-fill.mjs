export const name="signal_cellular_3_bar-fill";
export const id="dl_92b3b0ae0d4778228120";
export const url=new URL("../icons/signal_cellular_3_bar-fill.svg?v=7b76ad3e42cac3a8127c9d6f6d134d986cb478a32045952bdaf3587ab93c468d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
