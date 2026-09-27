export const name="signal_cellular_0_bar-fill";
export const id="dl_b779cb92513dc05263e7";
export const url=new URL("../icons/signal_cellular_0_bar-fill.svg?v=0ade01e713da7bb53f193545e9f476a796982a4b4a1d4b9043aaf6f7da018517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
