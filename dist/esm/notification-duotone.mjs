export const name="notification-duotone";
export const id="dl_97a45a3b76ad4f64a869";
export const url=new URL("../icons/notification-duotone.svg?v=2b16d38211027f906346567a68c3d95b1a65617181c6eaef034895118ec08796",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
