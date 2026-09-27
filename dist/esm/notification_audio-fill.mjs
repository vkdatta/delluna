export const name="notification_audio-fill";
export const id="dl_4147d2455dfc004eff54";
export const url=new URL("../icons/notification_audio-fill.svg?v=e521bbf0de3d9824d7eb6c0861881a4c7932ab864629ea1d74934ba69936cc2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
