export const name="signal_cellular_4_bar-fill";
export const id="dl_8047129328c03020fa3e";
export const url=new URL("../icons/signal_cellular_4_bar-fill.svg?v=3b75b27966c0f86db76c1f3c8ed654e741b1087db13d4a295af989e52df965d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
