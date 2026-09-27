export const name="candlestick_chart-fill";
export const id="dl_3ffb85590e3d5550a82c";
export const url=new URL("../icons/candlestick_chart-fill.svg?v=76f401b95957e4f2f364b1aa8518af8a8428ca0d6e470a13892fce2bd98bbcfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
