export const name="notification-duotone";
export const id="dl_97a45a3b76ad4f64a869";
export const url=new URL("../icons/notification-duotone.svg?v=23321ef4a757cece8f9d975c1f7bb844382842e92efafabd13a214164f60e0a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
