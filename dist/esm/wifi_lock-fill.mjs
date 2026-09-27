export const name="wifi_lock-fill";
export const id="dl_0a0f6a9611124d9265ae";
export const url=new URL("../icons/wifi_lock-fill.svg?v=b63e804963f6e1e27001d463da3480fd18a5885809aed26fd859e83e9650635a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
