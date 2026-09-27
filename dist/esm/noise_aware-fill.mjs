export const name="noise_aware-fill";
export const id="dl_4102fbe2343ec373e4cc";
export const url=new URL("../icons/noise_aware-fill.svg?v=f7d715985f91d8d3fab5fa0861824d2ec48c3f08d6a059082dac0e105d1dc0ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
