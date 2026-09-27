export const name="notification-light";
export const id="dl_bddc9cf34c1f4e85bd92";
export const url=new URL("../icons/notification-light.svg?v=385336f7a5385b1e0946af00d944ffad768ab2f1e9507e7087ef75d999610b36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
