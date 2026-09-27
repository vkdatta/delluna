export const name="wifi-zero";
export const id="dl_75a318ca98e144b8b154";
export const url=new URL("../icons/wifi-zero.svg?v=d369c720adf45e74acf5ede80fbb830132564ca6fb129a040d9df63bd050cd58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
