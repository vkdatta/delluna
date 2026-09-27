export const name="notification_important-fill";
export const id="dl_6b736efbbdda3e7577b2";
export const url=new URL("../icons/notification_important-fill.svg?v=3fb9e99dc0954f017206a3bba2c08099c3a2e3fb51994965751302d71ee6b963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
