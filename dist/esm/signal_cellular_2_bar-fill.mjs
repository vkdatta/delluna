export const name="signal_cellular_2_bar-fill";
export const id="dl_935142fcf7e6ce5154ba";
export const url=new URL("../icons/signal_cellular_2_bar-fill.svg?v=99bdb435a5bd54db9cf197220e19762d008d9435a58dc30aa9f0ff1f5ca24354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
