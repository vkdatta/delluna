export const name="wifi_notification-fill";
export const id="dl_cd2fc58abf46cc2b678f";
export const url=new URL("../icons/wifi_notification-fill.svg?v=a5ed65bc04b457fe388b5b4ac89baa6832108ef70d3b0508aaf46a8974cb689c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
