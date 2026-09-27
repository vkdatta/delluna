export const name="signal_cellular_3_bar-fill";
export const id="dl_2151895ca251fac0d6af";
export const url=new URL("../icons/signal_cellular_3_bar-fill.svg?v=7e2e1173ff9b75c0d568e6ca4a69dca90a710525d94c619eecf9cc97b92d0cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
