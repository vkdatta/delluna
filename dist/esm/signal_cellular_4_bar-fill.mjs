export const name="signal_cellular_4_bar-fill";
export const id="dl_6899cd119ba82b5637d5";
export const url=new URL("../icons/signal_cellular_4_bar-fill.svg?v=dbf1605ad035c524a56ac7c89adcde2a277a89ef23c38c3395f61442e2299d63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
