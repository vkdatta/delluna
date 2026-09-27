export const name="wifi_notification";
export const id="dl_0558fef5aae7d45b46d1";
export const url=new URL("../icons/wifi_notification.svg?v=e4efce62cd753d33bfef5fa3bfc6dc76f036b684ebe87eba6c22cada08ead3ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
