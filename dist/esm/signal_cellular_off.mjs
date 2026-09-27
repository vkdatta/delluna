export const name="signal_cellular_off";
export const id="dl_dbf6e5c80869650e12ea";
export const url=new URL("../icons/signal_cellular_off.svg?v=ebd527d630aac90980285364b6f92c5ff15cbac31c9d4798ecbcd2f898da0997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
