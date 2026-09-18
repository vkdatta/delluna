export const name="notification_sound-fill";
export const id="dl_7ac6a37a92cc4e129221";
export const url=new URL("../icons/notification_sound-fill.svg?v=37a16efef436d5070ab9ce455a4887e7253e4a96770b8dae2ccd296062e5215e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
