export const name="candlestick_chart";
export const id="dl_6901410ccc01d7a18a7c";
export const url=new URL("../icons/candlestick_chart.svg?v=2c9864b1148d48df3c8163c097536773ae682b56d4a57fe4ecec09e30c4a4c8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
