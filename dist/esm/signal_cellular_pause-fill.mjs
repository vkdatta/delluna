export const name="signal_cellular_pause-fill";
export const id="dl_7810b207300b482dddc1";
export const url=new URL("../icons/signal_cellular_pause-fill.svg?v=2e56db0e974a93f60d0096d03445362ccccb6d165c7b99cd3375aa200d8a96b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
