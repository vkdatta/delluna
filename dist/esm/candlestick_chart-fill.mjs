export const name="candlestick_chart-fill";
export const id="dl_68cd31635a3e94b6aef5";
export const url=new URL("../icons/candlestick_chart-fill.svg?v=efa160e494440ba0a5265d539ece92dd9c62335cb38f75973fe0d82e77bcf739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
