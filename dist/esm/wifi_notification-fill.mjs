export const name="wifi_notification-fill";
export const id="dl_a5b8e20e75c835611b44";
export const url=new URL("../icons/wifi_notification-fill.svg?v=37af0f4aa838683aa61637ce36cccdc81edd7ce1492f9fa5f4a2a368c6b6b939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
