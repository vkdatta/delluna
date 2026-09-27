export const name="wifi_notification-fill";
export const id="dl_63e057bf9b39c285de81";
export const url=new URL("../icons/wifi_notification-fill.svg?v=f5caf39f4a9f23bdbe53ef87c6465005e3479fd4a46f3c54f48c13e55d95a113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
