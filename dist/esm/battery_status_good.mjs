export const name="battery_status_good";
export const id="dl_30cf7be4107186249241";
export const url=new URL("../icons/battery_status_good.svg?v=54d853d1a85b2bbf3c96479ff9eda758a756e2a15a5e8d46e8a35241303f3624",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
