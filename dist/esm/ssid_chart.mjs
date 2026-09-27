export const name="ssid_chart";
export const id="dl_9584d75d1f7fb70b6078";
export const url=new URL("../icons/ssid_chart.svg?v=67845af260054a2201da71e9b961b684035dfcd1cf1ac4ef4ed733fb4af46a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
