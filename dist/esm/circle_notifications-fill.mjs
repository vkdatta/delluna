export const name="circle_notifications-fill";
export const id="dl_3407be982dbe5cb90427";
export const url=new URL("../icons/circle_notifications-fill.svg?v=76ed4a326c917d56d83d6c88c0f80aef4b69cb68d85a1b493c96d2a195e8671e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
