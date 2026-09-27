export const name="headphones_battery";
export const id="dl_433afac90a6034ad7063";
export const url=new URL("../icons/headphones_battery.svg?v=70e9629b0193110635bf54174e32d20217b8d8b2d83e8170ae3950a819c00df4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
