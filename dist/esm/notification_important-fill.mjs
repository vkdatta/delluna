export const name="notification_important-fill";
export const id="dl_245fc0a69df7bfabc2dc";
export const url=new URL("../icons/notification_important-fill.svg?v=37f1587dcbc395b65ca373db24b2cead491a7287c78a99889c4d65e5d47e4a4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
