export const name="candlestick_chart";
export const id="dl_31b5b13b97dec7ccd7cf";
export const url=new URL("../icons/candlestick_chart.svg?v=ec7b4c1bb1a9c11fdd22b1617d0a082f805638525310ada3ebee983826401936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
