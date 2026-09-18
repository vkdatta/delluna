export const name="notification_important-fill";
export const id="dl_4439eed2846f48b1806a";
export const url=new URL("../icons/notification_important-fill.svg?v=842d96e01b701ecd0d18e21f325a85e29469731a0ee571bbd35b5b8be5bc9d5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
