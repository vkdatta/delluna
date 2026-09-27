export const name="signal_cellular_alt_1_bar-fill";
export const id="dl_b212d5b6ac7051d9980c";
export const url=new URL("../icons/signal_cellular_alt_1_bar-fill.svg?v=36c1b9c8a18a4ce244e5458ac51164cdc0baf924bebd5fced67eb4ce78f02d80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
