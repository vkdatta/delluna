export const name="candlestick_chart-fill";
export const id="dl_44509c4227e3879e3c3c";
export const url=new URL("../icons/candlestick_chart-fill.svg?v=2a823287cd2222f2f58a3823397ec612eb01997f4c0c11173569d137d81574b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
