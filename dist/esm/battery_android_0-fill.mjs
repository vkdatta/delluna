export const name="battery_android_0-fill";
export const id="dl_5e33757614c289c7365d";
export const url=new URL("../icons/battery_android_0-fill.svg?v=5272e0c127c5682aa4776ce2ad900ae37d697358293c42d37a6ecd01533e55fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
