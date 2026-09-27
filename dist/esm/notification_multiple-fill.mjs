export const name="notification_multiple-fill";
export const id="dl_70bfb4be694cbffe3642";
export const url=new URL("../icons/notification_multiple-fill.svg?v=da89fdf2bd16e657f6bcbbe1f6d5863af3dffd1ea51b386c3f6e2926fd76f1ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
