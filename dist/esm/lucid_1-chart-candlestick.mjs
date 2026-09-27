export const name="lucid_1-chart-candlestick";
export const id="dl_4ebb82042b834c3aa7d5";
export const url=new URL("../icons/lucid_1-chart-candlestick.svg?v=76674c5dc80059b79c57c02b491eeb31452347a63625dd71916eaa1789c9de17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
