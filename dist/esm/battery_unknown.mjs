export const name="battery_unknown";
export const id="dl_ec9bf6d769bec70b89e4";
export const url=new URL("../icons/battery_unknown.svg?v=3bf3123c659f384fd3b659ff6d41d58bc7af02e08b4c00248cc396c03f7735b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
