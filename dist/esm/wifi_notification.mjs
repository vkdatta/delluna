export const name="wifi_notification";
export const id="dl_fdaaba1676c94cabaf90";
export const url=new URL("../icons/W/wifi_notification.svg?v=8c36cb41a00670220ce6e5ee2d076f26a19e660581d77d14bfbff98428f8fe75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
